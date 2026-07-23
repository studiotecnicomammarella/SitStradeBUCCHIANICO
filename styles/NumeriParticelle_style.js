var clusterSize = 0;
    
var style_NumeriParticelle = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10.4px \'Arial\', sans-serif";
    var labelFill = 'rgba(0,0,255,1.0)';
    var bufferColor = 'rgba(250,250,250,1.0)';
    var bufferWidth = 3.0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    var value = feature.get("") || "";
    if (feature.get("Mappale") !== null) {
        labelText = String(feature.get("Mappale"));
    }
        var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
    return style;
};
    