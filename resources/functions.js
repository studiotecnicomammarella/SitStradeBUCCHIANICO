var createTextStyle = function(feature, resolution, labelText, labelFont,
                               labelFill, placement, bufferColor,
                               bufferWidth) {

    if (feature.hide || !labelText) {
        return; 
    } 

    if (bufferWidth == 0) {
        var bufferStyle = null;
    } else {
        var bufferStyle = new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        })
    }
    
    var textStyle = new ol.style.Text({
        font: labelFont,
        text: labelText,
        textBaseline: "middle",
        textAlign: "left",
        offsetX: 8,
        offsetY: 3,
        placement: placement,
        maxAngle: 0,
        fill: new ol.style.Fill({
          color: labelFill
        }),
        stroke: bufferStyle
    });

    return textStyle;
};

function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width/2), -(screen.height/2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0,0,screen.width,screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};



function clusterStyle(feature, resolution, singleFeatureStyle) {
    // Verifica se 'features' è definito e se è un array
    var features = feature.get('features');
    var size = Array.isArray(features) ? features.length : 0;
    var style;
  
    if (size === 1) {
      // Usa lo stile singolo per la feature
      style = singleFeatureStyle(feature, resolution);
    } else if (size > 1) {
      // Stile per cluster di feature
      var color = size > 25 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
      var radius = Math.max(8, Math.min(size * 0.75, 20));
  
      style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius,
          stroke: new ol.style.Stroke({
            color: "rgba(" + color + ",0.5)",
            width: 7,
          }),
          fill: new ol.style.Fill({
            color: "rgba(" + color + ",1)"
          })
        }),
        text: new ol.style.Text({
          text: size.toString(),
          fill: new ol.style.Fill({
            color: '#fff'
          })
        })
      });
    } else {
      // Gestire il caso in cui non ci siano feature (se necessario)
      style = singleFeatureStyle(feature, resolution);
    }
  
    return style;
  }


/* function applySLDstyle(vectorLayer, sldContent, layerName) {       
	const sldObject = SLDReader.Reader(sldContent);
	const sldLayer = SLDReader.getLayer(sldObject);
	const style = SLDReader.getStyle(sldLayer, layerName); // Use the correct layer name
	const featureTypeStyle = style.featuretypestyles[0];
	
	document.addEventListener('DOMContentLoaded', function() {
		const viewProjection = map.getView().getProjection();
		vectorLayer.setStyle(SLDReader.createOlStyleFunction(featureTypeStyle, {
			convertResolution: viewResolution => {
				const viewCenter = map.getView().getCenter();
				return ol.proj.getPointResolution(viewProjection, viewResolution, viewCenter);
			},
			imageLoadedCallback: () => {
				vectorLayer.changed();
			},
		}));
	});
} */


// Funzione per non disegnare le features con simbologia spenta
function symbologySwitcher(layer, value) {    
    if (layer) {
        const allSetLyr = layer.get('allSymbology');
        const actSetLyr = layer.get('activeSymbology');
        if (actSetLyr) {
          if (actSetLyr.type === "categorized") {
              const valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
              if (actSetLyr.values.includes("ogis-other")) {
                  const diff = allSetLyr.values.filter(v => !actSetLyr.values.includes(v));
                  if (diff.includes(valueStr)) return null;
              } else if (!actSetLyr.values.includes(valueStr)) {
                  return null;
              }
          } else if (actSetLyr.type === "graduated") {
              const activeRanges = actSetLyr.values; // array di {min,max}
              const inRange = activeRanges.some(r => value >= r.min && value <= r.max);
              if (!inRange) return null;
          }
          // rule-based type managed in expressions.js file
        }
    }
}


// Funzione per applicare lo stile in caso di Complex Style quindi esportazione di
// file di stile in formato SLD
function applySLDstyle(layer, sldContent, layerName) {       
    const sldObject = SLDReader.Reader(sldContent);
    const sldLayer = SLDReader.getLayer(sldObject);
    const style = SLDReader.getStyle(sldLayer, layerName);
    const featureTypeStyle = style.featuretypestyles[0];
	
	document.addEventListener('DOMContentLoaded', function() {

		const viewProjection = map.getView().getProjection();

		// Funzione stile base (senza filtri custom)
		const baseStyleFunction = SLDReader.createOlStyleFunction(featureTypeStyle, {
			convertResolution: viewResolution => {
				const viewCenter = map.getView().getCenter();
				return ol.proj.getPointResolution(viewProjection, viewResolution, viewCenter);
			},
			imageLoadedCallback: () => {
				layer.changed();
			},
		});

				
		// Funzione ricorsiva per estrarre il propertyName dallo stile SLD
		function extractPropertyNameFromFilter(filter) {
			if (!filter) return null;

			// Caso semplice: confronto diretto con expression1
			if (filter.expression1 && filter.expression1.type === "propertyname") {
				return filter.expression1.value;
			}

			// Alcuni filtri potrebbero avere direttamente propertyname
			if (filter.propertyname) {
				return filter.propertyname;
			}

			// Caso composito: filtro con più predicati
			if (filter.predicates && Array.isArray(filter.predicates)) {
				for (const pred of filter.predicates) {
					const found = extractPropertyNameFromFilter(pred);
					if (found) return found;
				}
			}

			return null;
		}
		function getPropertyNameFromFeatureTypeStyle(featureTypeStyle) {
			if (!featureTypeStyle || !featureTypeStyle.rules) return null;

			for (const rule of featureTypeStyle.rules) {
				const found = extractPropertyNameFromFilter(rule.filter);
				if (found) return found;
			}
			return null;
		}

		let propertyName = getPropertyNameFromFeatureTypeStyle(featureTypeStyle);
		if (!propertyName) {
			console.warn("⚠️ Nessun PropertyName trovato nello SLD, uso '' di default");
			propertyName = "";
		}

		// Controllo quali features non disegnare con simbologia spenta
		layer.setStyle(function(feature, resolution) {	
				const value = feature.get(propertyName);
				const allSetLyr = layer.get('allSymbology');
        const actSetLyr = layer.get('activeSymbology');
				if (actSetLyr) {
					if (actSetLyr.type === "categorized") {
            const valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
						if (actSetLyr.values.includes("ogis-other")) {
							const diff = allSetLyr.values.filter(v => !actSetLyr.values.includes(v));
							if (diff.includes(valueStr)) return null;
						} else if (!actSetLyr.values.includes(valueStr))  {
              return null;
            }
					} else if (actSetLyr.type === "graduated") {
						const activeRanges = actSetLyr.values; // array di {min,max}
						const inRange = activeRanges.some(r => value >= r.min && value <= r.max);
						if (!inRange) return null;
					} else if (actSetLyr.type === "rule-based") {
						var context = {
							feature: feature,
							variables: {}
						};
						// Lancio le espressioni definite in expressions.js
            // ed applico stile null per i return false
						const matches = exp_rules_List.some(fn => fn(context));
						if (!matches) {
							return null;
						}						
					}
				}

			// Se passa i controlli → applico lo stile SLD originale
			return baseStyleFunction(feature, resolution);
		});
	});
}
