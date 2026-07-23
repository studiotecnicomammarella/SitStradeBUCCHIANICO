var clusterSize = 0;
    
var style_CIVICI = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = 'rgba(255,127,0,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 3.0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if (feature.get("NUMERO CIVICO") !== null) {
        labelText = String(feature.get("NUMERO CIVICO"));
    }
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    