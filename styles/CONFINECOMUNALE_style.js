var clusterSize = 0;
    
var style_CONFINECOMUNALE = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = '';
    var bufferColor = '';
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if ("" !== null) {
        labelText = String("");
    }
        var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,41,0,1.0)', lineDash: [9.575999999999999,4.787999999999999], lineCap: 'butt', lineJoin: 'miter', width: 4.787999999999999}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    