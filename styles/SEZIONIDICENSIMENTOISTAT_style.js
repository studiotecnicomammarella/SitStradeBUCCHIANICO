var clusterSize = 0;
    
var style_SEZIONIDICENSIMENTOISTAT = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = 'rgba(50,50,50,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 3.0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if (feature.get("SEZIONE DI CENSIMENTO") !== null) {
        labelText = String(feature.get("SEZIONE DI CENSIMENTO"));
    }
        var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: [6.08,3.04], lineCap: 'butt', lineJoin: 'miter', width: 3.04}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    