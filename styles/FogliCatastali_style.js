var clusterSize = 0;
    
var style_FogliCatastali = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = 'rgba(50,50,50,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 3.0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if (feature.get("Foglio") !== null) {
        labelText = String(feature.get("Foglio"));
    }
        var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,253,13,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.787999999999999}),fill: new ol.style.Fill({color: 'rgba(254,254,204,1.0)'}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    