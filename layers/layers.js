ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6708").setExtent([423068.819341, 4674210.784533, 441239.941002, 4697446.791017]);
var wms_layers = [];

var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        
var lyr_GoogleHybrid = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a> &nbsp&nbsp ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        
var format_Acque = new ol.format.GeoJSON();
var features_Acque = format_Acque.readFeatures(json_Acque, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_Acque = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Acque.png"/><b>Acque</b>'
    });
var lyr_Acque = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Acque,
maxResolution:5.600893230452393,
 
    permalink: "Acque",
    popuplayertitle: 'Acque',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_Acque,
    title: '<img src="styles/legend/Acque.png"/>Acque'
    });
var featureCounter_Acque = 1;
jsonSource_Acque.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Acque++);
    feature.set("layerObject", lyr_Acque);
});        
jsonSource_Acque.addFeatures(features_Acque);

var format_Strade = new ol.format.GeoJSON();
var features_Strade = format_Strade.readFeatures(json_Strade, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_Strade = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Strade.png"/><b>Strade</b>'
    });
var lyr_Strade = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Strade,
maxResolution:5.600893230452393,
 
    permalink: "Strade",
    popuplayertitle: 'Strade',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_Strade,
    title: '<img src="styles/legend/Strade.png"/>Strade'
    });
var featureCounter_Strade = 1;
jsonSource_Strade.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Strade++);
    feature.set("layerObject", lyr_Strade);
});        
jsonSource_Strade.addFeatures(features_Strade);

var format_Particelle = new ol.format.GeoJSON();
var features_Particelle = format_Particelle.readFeatures(json_Particelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_Particelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Particelle.png"/><b>Particelle</b>'
    });
var lyr_Particelle = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Particelle,
maxResolution:5.600893230452393,
 
    permalink: "Particelle",
    popuplayertitle: 'Particelle',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_Particelle,
    title: '<img src="styles/legend/Particelle.png"/>Particelle'
    });
var featureCounter_Particelle = 1;
jsonSource_Particelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Particelle++);
    feature.set("layerObject", lyr_Particelle);
});        
jsonSource_Particelle.addFeatures(features_Particelle);

var format_Fabbricati = new ol.format.GeoJSON();
var features_Fabbricati = format_Fabbricati.readFeatures(json_Fabbricati, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_Fabbricati = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Fabbricati.png"/><b>Fabbricati</b>'
    });
var lyr_Fabbricati = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Fabbricati,
maxResolution:5.600893230452393,
 
    permalink: "Fabbricati",
    popuplayertitle: 'Fabbricati',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_Fabbricati,
    title: '<img src="styles/legend/Fabbricati.png"/>Fabbricati'
    });
var featureCounter_Fabbricati = 1;
jsonSource_Fabbricati.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Fabbricati++);
    feature.set("layerObject", lyr_Fabbricati);
});        
jsonSource_Fabbricati.addFeatures(features_Fabbricati);

var format_NumeriParticelle = new ol.format.GeoJSON();
var features_NumeriParticelle = format_NumeriParticelle.readFeatures(json_NumeriParticelle, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_NumeriParticelle = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/NumeriParticelle.png"/><b>Numeri Particelle</b>'
    });
var lyr_NumeriParticelle = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_NumeriParticelle,
maxResolution:0.7561205861110731,
 
    permalink: "NumeriParticelle",
    popuplayertitle: 'Numeri Particelle',
    creationdate: '2026-07-23 14:58:43',
    interactive: false,
    style: style_NumeriParticelle,
    title: '<img src="styles/legend/NumeriParticelle.png"/>Numeri Particelle'
    });
var featureCounter_NumeriParticelle = 1;
jsonSource_NumeriParticelle.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_NumeriParticelle++);
    feature.set("layerObject", lyr_NumeriParticelle);
});        
jsonSource_NumeriParticelle.addFeatures(features_NumeriParticelle);

var format_CIVICI = new ol.format.GeoJSON();
var features_CIVICI = format_CIVICI.readFeatures(json_CIVICI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CIVICI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CIVICI.png"/><b>CIVICI</b>'
    });
var lyr_CIVICI = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_CIVICI,
maxResolution:2.8004466152261966,
 
    permalink: "CIVICI",
    popuplayertitle: 'CIVICI',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CIVICI,
    title: '<img src="styles/legend/CIVICI.png"/>CIVICI'
    });
var featureCounter_CIVICI = 1;
jsonSource_CIVICI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CIVICI++);
    feature.set("layerObject", lyr_CIVICI);
});        
jsonSource_CIVICI.addFeatures(features_CIVICI);

var format_SEZIONIDICENSIMENTOISTAT = new ol.format.GeoJSON();
var features_SEZIONIDICENSIMENTOISTAT = format_SEZIONIDICENSIMENTOISTAT.readFeatures(json_SEZIONIDICENSIMENTOISTAT, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_SEZIONIDICENSIMENTOISTAT = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/SEZIONIDICENSIMENTOISTAT.png"/><b>SEZIONI DI CENSIMENTO ISTAT</b>'
    });
var lyr_SEZIONIDICENSIMENTOISTAT = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SEZIONIDICENSIMENTOISTAT,
maxResolution:5.600893230452393,
 
    permalink: "SEZIONIDICENSIMENTOISTAT",
    popuplayertitle: 'SEZIONI DI CENSIMENTO ISTAT',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_SEZIONIDICENSIMENTOISTAT,
    title: '<img src="styles/legend/SEZIONIDICENSIMENTOISTAT.png"/>SEZIONI DI CENSIMENTO ISTAT'
    });
var featureCounter_SEZIONIDICENSIMENTOISTAT = 1;
jsonSource_SEZIONIDICENSIMENTOISTAT.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_SEZIONIDICENSIMENTOISTAT++);
    feature.set("layerObject", lyr_SEZIONIDICENSIMENTOISTAT);
});        
jsonSource_SEZIONIDICENSIMENTOISTAT.addFeatures(features_SEZIONIDICENSIMENTOISTAT);

var format_RELITTIESTRADERURALIDIPROGETTO = new ol.format.GeoJSON();
var features_RELITTIESTRADERURALIDIPROGETTO = format_RELITTIESTRADERURALIDIPROGETTO.readFeatures(json_RELITTIESTRADERURALIDIPROGETTO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_RELITTIESTRADERURALIDIPROGETTO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/RELITTIESTRADERURALIDIPROGETTO.png"/><b>RELITTI E STRADE RURALI DI PROGETTO</b>'
    });
var lyr_RELITTIESTRADERURALIDIPROGETTO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RELITTIESTRADERURALIDIPROGETTO, 
    permalink: "RELITTIESTRADERURALIDIPROGETTO",
    popuplayertitle: 'RELITTI E STRADE RURALI DI PROGETTO',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_RELITTIESTRADERURALIDIPROGETTO,
    title: '<img src="styles/legend/RELITTIESTRADERURALIDIPROGETTO.png"/>RELITTI E STRADE RURALI DI PROGETTO'
    });
var featureCounter_RELITTIESTRADERURALIDIPROGETTO = 1;
jsonSource_RELITTIESTRADERURALIDIPROGETTO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_RELITTIESTRADERURALIDIPROGETTO++);
    feature.set("layerObject", lyr_RELITTIESTRADERURALIDIPROGETTO);
});        
jsonSource_RELITTIESTRADERURALIDIPROGETTO.addFeatures(features_RELITTIESTRADERURALIDIPROGETTO);

var format_CONTRADEDIPROGETTO = new ol.format.GeoJSON();
var features_CONTRADEDIPROGETTO = format_CONTRADEDIPROGETTO.readFeatures(json_CONTRADEDIPROGETTO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CONTRADEDIPROGETTO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONTRADEDIPROGETTO.png"/><b>CONTRADE DI PROGETTO</b>'
    });
var lyr_CONTRADEDIPROGETTO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CONTRADEDIPROGETTO, 
    permalink: "CONTRADEDIPROGETTO",
    popuplayertitle: 'CONTRADE DI PROGETTO',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CONTRADEDIPROGETTO,
    title: '<img src="styles/legend/CONTRADEDIPROGETTO.png"/>CONTRADE DI PROGETTO'
    });
var featureCounter_CONTRADEDIPROGETTO = 1;
jsonSource_CONTRADEDIPROGETTO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONTRADEDIPROGETTO++);
    feature.set("layerObject", lyr_CONTRADEDIPROGETTO);
});        
jsonSource_CONTRADEDIPROGETTO.addFeatures(features_CONTRADEDIPROGETTO);

var format_CENTROSTORICODIPROGETTO = new ol.format.GeoJSON();
var features_CENTROSTORICODIPROGETTO = format_CENTROSTORICODIPROGETTO.readFeatures(json_CENTROSTORICODIPROGETTO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CENTROSTORICODIPROGETTO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CENTROSTORICODIPROGETTO.png"/><b>CENTRO STORICO DI PROGETTO</b>'
    });
var lyr_CENTROSTORICODIPROGETTO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CENTROSTORICODIPROGETTO, 
    permalink: "CENTROSTORICODIPROGETTO",
    popuplayertitle: 'CENTRO STORICO DI PROGETTO',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CENTROSTORICODIPROGETTO,
    title: '<img src="styles/legend/CENTROSTORICODIPROGETTO.png"/>CENTRO STORICO DI PROGETTO'
    });
var featureCounter_CENTROSTORICODIPROGETTO = 1;
jsonSource_CENTROSTORICODIPROGETTO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CENTROSTORICODIPROGETTO++);
    feature.set("layerObject", lyr_CENTROSTORICODIPROGETTO);
});        
jsonSource_CENTROSTORICODIPROGETTO.addFeatures(features_CENTROSTORICODIPROGETTO);

var format_RELITTIESTRADERURALI = new ol.format.GeoJSON();
var features_RELITTIESTRADERURALI = format_RELITTIESTRADERURALI.readFeatures(json_RELITTIESTRADERURALI, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_RELITTIESTRADERURALI = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/RELITTIESTRADERURALI.png"/><b>RELITTI E STRADE RURALI</b>'
    });
var lyr_RELITTIESTRADERURALI = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RELITTIESTRADERURALI, 
    permalink: "RELITTIESTRADERURALI",
    popuplayertitle: 'RELITTI E STRADE RURALI',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_RELITTIESTRADERURALI,
    title: '<img src="styles/legend/RELITTIESTRADERURALI.png"/>RELITTI E STRADE RURALI'
    });
var featureCounter_RELITTIESTRADERURALI = 1;
jsonSource_RELITTIESTRADERURALI.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_RELITTIESTRADERURALI++);
    feature.set("layerObject", lyr_RELITTIESTRADERURALI);
});        
jsonSource_RELITTIESTRADERURALI.addFeatures(features_RELITTIESTRADERURALI);

var format_CONTRADE = new ol.format.GeoJSON();
var features_CONTRADE = format_CONTRADE.readFeatures(json_CONTRADE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CONTRADE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONTRADE.png"/><b>CONTRADE</b>'
    });
var lyr_CONTRADE = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CONTRADE, 
    permalink: "CONTRADE",
    popuplayertitle: 'CONTRADE',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CONTRADE,
    title: '<img src="styles/legend/CONTRADE.png"/>CONTRADE'
    });
var featureCounter_CONTRADE = 1;
jsonSource_CONTRADE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONTRADE++);
    feature.set("layerObject", lyr_CONTRADE);
});        
jsonSource_CONTRADE.addFeatures(features_CONTRADE);

var format_CENTROSTORICO = new ol.format.GeoJSON();
var features_CENTROSTORICO = format_CENTROSTORICO.readFeatures(json_CENTROSTORICO, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CENTROSTORICO = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CENTROSTORICO.png"/><b>CENTRO STORICO</b>'
    });
var lyr_CENTROSTORICO = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CENTROSTORICO, 
    permalink: "CENTROSTORICO",
    popuplayertitle: 'CENTRO STORICO',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CENTROSTORICO,
    title: '<img src="styles/legend/CENTROSTORICO.png"/>CENTRO STORICO'
    });
var featureCounter_CENTROSTORICO = 1;
jsonSource_CENTROSTORICO.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CENTROSTORICO++);
    feature.set("layerObject", lyr_CENTROSTORICO);
});        
jsonSource_CENTROSTORICO.addFeatures(features_CENTROSTORICO);

var format_FogliCatastali = new ol.format.GeoJSON();
var features_FogliCatastali = format_FogliCatastali.readFeatures(json_FogliCatastali, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_FogliCatastali = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/FogliCatastali.png"/><b>Fogli Catastali</b>'
    });
var lyr_FogliCatastali = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_FogliCatastali,
maxResolution:28004.466152261964,
 minResolution:5.600893230452393,

    permalink: "FogliCatastali",
    popuplayertitle: 'Fogli Catastali',
    creationdate: '2026-07-23 14:58:43',
    interactive: false,
    style: style_FogliCatastali,
    title: '<img src="styles/legend/FogliCatastali.png"/>Fogli Catastali'
    });
var featureCounter_FogliCatastali = 1;
jsonSource_FogliCatastali.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_FogliCatastali++);
    feature.set("layerObject", lyr_FogliCatastali);
});        
jsonSource_FogliCatastali.addFeatures(features_FogliCatastali);

var format_CONFINECOMUNALE = new ol.format.GeoJSON();
var features_CONFINECOMUNALE = format_CONFINECOMUNALE.readFeatures(json_CONFINECOMUNALE, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CONFINECOMUNALE = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONFINECOMUNALE.png"/><b>CONFINE COMUNALE</b>'
    });
var lyr_CONFINECOMUNALE = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CONFINECOMUNALE, 
    permalink: "CONFINECOMUNALE",
    popuplayertitle: 'CONFINE COMUNALE',
    creationdate: '2026-07-23 14:58:43',
    interactive: true,
    style: style_CONFINECOMUNALE,
    title: '<img src="styles/legend/CONFINECOMUNALE.png"/>CONFINE COMUNALE'
    });
var featureCounter_CONFINECOMUNALE = 1;
jsonSource_CONFINECOMUNALE.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONFINECOMUNALE++);
    feature.set("layerObject", lyr_CONFINECOMUNALE);
});        
jsonSource_CONFINECOMUNALE.addFeatures(features_CONFINECOMUNALE);

var format_CONFINIISTAT = new ol.format.GeoJSON();
var features_CONFINIISTAT = format_CONFINIISTAT.readFeatures(json_CONFINIISTAT, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:6708'});
var jsonSource_CONFINIISTAT = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/CONFINIISTAT.png"/><b>CONFINI ISTAT</b>'
    });
var lyr_CONFINIISTAT = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_CONFINIISTAT,
maxResolution:28004.466152261964,
 minResolution:14.00223307613098,

    permalink: "CONFINIISTAT",
    popuplayertitle: 'CONFINI ISTAT',
    creationdate: '2026-07-23 14:58:43',
    interactive: false,
    style: style_CONFINIISTAT,
    title: '<img src="styles/legend/CONFINIISTAT.png"/>CONFINI ISTAT'
    });
var featureCounter_CONFINIISTAT = 1;
jsonSource_CONFINIISTAT.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_CONFINIISTAT++);
    feature.set("layerObject", lyr_CONFINIISTAT);
});        
jsonSource_CONFINIISTAT.addFeatures(features_CONFINIISTAT);



window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
var group_STRADARIOATTUALE = new ol.layer.Group({
                                layers: [lyr_RELITTIESTRADERURALI,lyr_CONTRADE,lyr_CENTROSTORICO,],
                                openInLayerSwitcher: true,
                                title: 'STRADARIO ATTUALE'});
var group_STRADARIODIPROGETTO = new ol.layer.Group({
                                layers: [lyr_RELITTIESTRADERURALIDIPROGETTO,lyr_CONTRADEDIPROGETTO,lyr_CENTROSTORICODIPROGETTO,],
                                openInLayerSwitcher: true,
                                title: 'STRADARIO DI PROGETTO'});
var group_NUMERICIVICI = new ol.layer.Group({
                                layers: [lyr_CIVICI,lyr_SEZIONIDICENSIMENTOISTAT,],
                                openInLayerSwitcher: true,
                                title: 'NUMERI CIVICI'});
var group_CATASTALE = new ol.layer.Group({
                                layers: [lyr_Acque,lyr_Strade,lyr_Particelle,lyr_Fabbricati,lyr_NumeriParticelle,],
                                openInLayerSwitcher: false,
                                title: 'CATASTALE'});

lyr_OpenStreetMap.setVisible(false);lyr_GoogleSatellite.setVisible(true);lyr_GoogleHybrid.setVisible(false);lyr_Acque.setVisible(false);lyr_Strade.setVisible(false);lyr_Particelle.setVisible(false);lyr_Fabbricati.setVisible(false);lyr_NumeriParticelle.setVisible(false);lyr_CIVICI.setVisible(false);lyr_SEZIONIDICENSIMENTOISTAT.setVisible(false);lyr_RELITTIESTRADERURALIDIPROGETTO.setVisible(false);lyr_CONTRADEDIPROGETTO.setVisible(false);lyr_CENTROSTORICODIPROGETTO.setVisible(false);lyr_RELITTIESTRADERURALI.setVisible(false);lyr_CONTRADE.setVisible(true);lyr_CENTROSTORICO.setVisible(true);lyr_FogliCatastali.setVisible(true);lyr_CONFINECOMUNALE.setVisible(true);lyr_CONFINIISTAT.setVisible(true);
var layersList = [lyr_OpenStreetMap,lyr_GoogleSatellite,lyr_GoogleHybrid,group_CATASTALE,group_NUMERICIVICI,group_STRADARIODIPROGETTO,group_STRADARIOATTUALE,lyr_FogliCatastali,lyr_CONFINECOMUNALE,lyr_CONFINIISTAT];
lyr_Acque.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Strade.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_Particelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', 'CATASTO': 'CATASTO', });
lyr_Fabbricati.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', 'CATASTO': 'CATASTO', });
lyr_NumeriParticelle.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', 'CATASTO': 'CATASTO', });
lyr_CIVICI.set('fieldAliases', {'fid': 'fid', 'CODICE_COMUNE': 'CODICE_COMUNE', 'PROGR_NAZIONALE': 'PROGR_NAZIONALE', 'PROGR_STRADA': 'PROGR_STRADA', 'CODICE_COMUNALE': 'CODICE_COMUNALE', 'PROGR_CIVICO': 'PROGR_CIVICO', 'CIVICO': 'CIVICO', 'ESPONENTE': 'ESPONENTE', 'SPECIFICITA': 'SPECIFICITA', 'SISTEMA_METRICO': 'SISTEMA_METRICO', 'PROGRESSIVO_SNC': 'PROGRESSIVO_SNC', 'SEZIONE DI CENSIMENTO': 'SEZIONE DI CENSIMENTO', 'NUM_INTERNI': 'NUM_INTERNI', 'ISOLATO': 'ISOLATO', 'CODICE_CIVICO_COMUNALE': 'CODICE_CIVICO_COMUNALE', 'NON_CONFORMITA': 'NON_CONFORMITA', 'COORDINATA_X': 'COORDINATA_X', 'COORDINATA_Y': 'COORDINATA_Y', 'COORDINATA_Z': 'COORDINATA_Z', 'FLAG_VALIDAZIONE': 'FLAG_VALIDAZIONE', 'METODO': 'METODO', 'DATA_VALIDITA_AMMINISTRATIVA': 'DATA_VALIDITA_AMMINISTRATIVA', 'NUMERO CIVICO': 'NUMERO CIVICO', 'VIA': 'VIA', 'INDIRIZZO': 'INDIRIZZO', });
lyr_SEZIONIDICENSIMENTOISTAT.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'SEZ21': 'SEZ21', 'SEZ21_ID': 'SEZ21_ID', 'COD_TIPO_S': 'COD_TIPO_S', 'TIPO_LOC': 'TIPO_LOC', 'LOC21_ID': 'LOC21_ID', 'COD_ZIC': 'COD_ZIC', 'COD_ISAM': 'COD_ISAM', 'COD_ACQUE': 'COD_ACQUE', 'COD_ISOLE': 'COD_ISOLE', 'COD_MONT_D': 'COD_MONT_D', 'COD_AREA_S': 'COD_AREA_S', 'COM_ASC1': 'COM_ASC1', 'COM_ASC2': 'COM_ASC2', 'COM_ASC3': 'COM_ASC3', 'POP21': 'POP21', 'FAM21': 'FAM21', 'ABI21': 'ABI21', 'EDI21': 'EDI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'SEZIONE DI CENSIMENTO': 'SEZIONE DI CENSIMENTO', });
lyr_RELITTIESTRADERURALIDIPROGETTO.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', 'DENOMINAZIONE DI PROGETTO': 'DENOMINAZIONE DI PROGETTO', 'CODICE': 'CODICE', });
lyr_CONTRADEDIPROGETTO.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', 'DENOMINAZIONE DI PROGETTO': 'DENOMINAZIONE DI PROGETTO', 'CODICE': 'CODICE', });
lyr_CENTROSTORICODIPROGETTO.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', 'DENOMINAZIONE DI PROGETTO': 'DENOMINAZIONE DI PROGETTO', 'CODICE': 'CODICE', });
lyr_RELITTIESTRADERURALI.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CONTRADE.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CENTROSTORICO.set('fieldAliases', {'fid': 'fid', 'dxf_handle': 'dxf_handle', 'Comparto': 'Comparto', 'foglio_catastale_di_riferimento': 'foglio_catastale_di_riferimento', 'codice_inizio': 'codice_inizio', 'codice_fine': 'codice_fine', 'TIPO DI STRADA': 'TIPO DI STRADA', 'Odonimo_storico': 'Odonimo_storico', 'Odonimo_da_individuare': 'Odonimo_da_individuare', 'lunghezza_strada_in_ml': 'lunghezza_strada_in_ml', 'LUNGH': 'LUNGH', 'DENOMINAZIONE ATTUALE': 'DENOMINAZIONE ATTUALE', 'PAVIMENTAZIONE': 'PAVIMENTAZIONE', 'RELITTO CATASTALE': 'RELITTO CATASTALE', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_FogliCatastali.set('fieldAliases', {'fid': 'fid', 'Codice_comune': 'Codice_comune', 'Foglio': 'Foglio', 'Mappale': 'Mappale', 'Allegato': 'Allegato', 'Sviluppo': 'Sviluppo', 'Htxt': 'Htxt', 'Rtxt': 'Rtxt', 'Xtxt': 'Xtxt', 'Ytxt': 'Ytxt', });
lyr_CONFINECOMUNALE.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CONFINIISTAT.set('fieldAliases', {'fid': 'fid', 'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Acque.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Strade.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Particelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'CATASTO': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Fabbricati.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'CATASTO': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_NumeriParticelle.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'CATASTO': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CIVICI.set('fieldImages', {'fid': 'TextEdit', 'CODICE_COMUNE': 'TextEdit', 'PROGR_NAZIONALE': 'Range', 'PROGR_STRADA': 'Range', 'CODICE_COMUNALE': 'TextEdit', 'PROGR_CIVICO': 'Range', 'CIVICO': 'Range', 'ESPONENTE': 'TextEdit', 'SPECIFICITA': 'TextEdit', 'SISTEMA_METRICO': 'TextEdit', 'PROGRESSIVO_SNC': 'TextEdit', 'SEZIONE DI CENSIMENTO': 'Range', 'NUM_INTERNI': 'CheckBox', 'ISOLATO': 'TextEdit', 'CODICE_CIVICO_COMUNALE': 'TextEdit', 'NON_CONFORMITA': 'TextEdit', 'COORDINATA_X': 'TextEdit', 'COORDINATA_Y': 'TextEdit', 'COORDINATA_Z': 'TextEdit', 'FLAG_VALIDAZIONE': 'CheckBox', 'METODO': 'Range', 'DATA_VALIDITA_AMMINISTRATIVA': 'TextEdit', 'NUMERO CIVICO': 'TextEdit', 'VIA': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SEZIONIDICENSIMENTOISTAT.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ21': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'COD_TIPO_S': 'TextEdit', 'TIPO_LOC': 'TextEdit', 'LOC21_ID': 'TextEdit', 'COD_ZIC': 'TextEdit', 'COD_ISAM': 'TextEdit', 'COD_ACQUE': 'TextEdit', 'COD_ISOLE': 'TextEdit', 'COD_MONT_D': 'TextEdit', 'COD_AREA_S': 'TextEdit', 'COM_ASC1': 'TextEdit', 'COM_ASC2': 'TextEdit', 'COM_ASC3': 'TextEdit', 'POP21': 'TextEdit', 'FAM21': 'TextEdit', 'ABI21': 'TextEdit', 'EDI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SEZIONE DI CENSIMENTO': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_RELITTIESTRADERURALIDIPROGETTO.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'DENOMINAZIONE DI PROGETTO': 'TextEdit', 'CODICE': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONTRADEDIPROGETTO.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'DENOMINAZIONE DI PROGETTO': 'TextEdit', 'CODICE': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CENTROSTORICODIPROGETTO.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'DENOMINAZIONE DI PROGETTO': 'TextEdit', 'CODICE': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_RELITTIESTRADERURALI.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONTRADE.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CENTROSTORICO.set('fieldImages', {'fid': 'TextEdit', 'dxf_handle': 'TextEdit', 'Comparto': 'TextEdit', 'foglio_catastale_di_riferimento': 'TextEdit', 'codice_inizio': 'TextEdit', 'codice_fine': 'TextEdit', 'TIPO DI STRADA': 'TextEdit', 'Odonimo_storico': 'TextEdit', 'Odonimo_da_individuare': 'TextEdit', 'lunghezza_strada_in_ml': 'TextEdit', 'LUNGH': 'TextEdit', 'DENOMINAZIONE ATTUALE': 'TextEdit', 'PAVIMENTAZIONE': 'TextEdit', 'RELITTO CATASTALE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FogliCatastali.set('fieldImages', {'fid': 'TextEdit', 'Codice_comune': 'TextEdit', 'Foglio': 'TextEdit', 'Mappale': 'TextEdit', 'Allegato': 'TextEdit', 'Sviluppo': 'TextEdit', 'Htxt': 'TextEdit', 'Rtxt': 'TextEdit', 'Xtxt': 'TextEdit', 'Ytxt': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONFINECOMUNALE.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_CONFINIISTAT.set('fieldImages', {'fid': 'TextEdit', 'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Acque.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'header label - always visible', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', });
lyr_Strade.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'hidden field', 'Mappale': 'no label', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', });
lyr_Particelle.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'header label - always visible', 'Mappale': 'header label - always visible', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', 'CATASTO': 'hidden field', });
lyr_Fabbricati.set('fieldLabels', {'fid': 'hidden field', 'Codice_comune': 'hidden field', 'Foglio': 'header label - always visible', 'Mappale': 'header label - always visible', 'Allegato': 'hidden field', 'Sviluppo': 'hidden field', 'Htxt': 'hidden field', 'Rtxt': 'hidden field', 'Xtxt': 'hidden field', 'Ytxt': 'hidden field', 'CATASTO': 'hidden field', });
lyr_NumeriParticelle.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', 'CATASTO': 'no label', });
lyr_CIVICI.set('fieldLabels', {'fid': 'hidden field', 'CODICE_COMUNE': 'hidden field', 'PROGR_NAZIONALE': 'hidden field', 'PROGR_STRADA': 'hidden field', 'CODICE_COMUNALE': 'hidden field', 'PROGR_CIVICO': 'hidden field', 'CIVICO': 'hidden field', 'ESPONENTE': 'hidden field', 'SPECIFICITA': 'hidden field', 'SISTEMA_METRICO': 'hidden field', 'PROGRESSIVO_SNC': 'hidden field', 'SEZIONE DI CENSIMENTO': 'header label - always visible', 'NUM_INTERNI': 'hidden field', 'ISOLATO': 'hidden field', 'CODICE_CIVICO_COMUNALE': 'hidden field', 'NON_CONFORMITA': 'hidden field', 'COORDINATA_X': 'hidden field', 'COORDINATA_Y': 'hidden field', 'COORDINATA_Z': 'hidden field', 'FLAG_VALIDAZIONE': 'hidden field', 'METODO': 'hidden field', 'DATA_VALIDITA_AMMINISTRATIVA': 'hidden field', 'NUMERO CIVICO': 'header label - always visible', 'VIA': 'hidden field', 'INDIRIZZO': 'header label - always visible', });
lyr_SEZIONIDICENSIMENTOISTAT.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'COD_UTS': 'hidden field', 'PRO_COM': 'hidden field', 'SEZ21': 'hidden field', 'SEZ21_ID': 'hidden field', 'COD_TIPO_S': 'hidden field', 'TIPO_LOC': 'hidden field', 'LOC21_ID': 'hidden field', 'COD_ZIC': 'hidden field', 'COD_ISAM': 'hidden field', 'COD_ACQUE': 'hidden field', 'COD_ISOLE': 'hidden field', 'COD_MONT_D': 'hidden field', 'COD_AREA_S': 'hidden field', 'COM_ASC1': 'hidden field', 'COM_ASC2': 'hidden field', 'COM_ASC3': 'hidden field', 'POP21': 'hidden field', 'FAM21': 'hidden field', 'ABI21': 'hidden field', 'EDI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'SEZIONE DI CENSIMENTO': 'header label - always visible', });
lyr_RELITTIESTRADERURALIDIPROGETTO.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'header label - always visible', 'PAVIMENTAZIONE': 'header label - always visible', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', 'DENOMINAZIONE DI PROGETTO': 'header label - always visible', 'CODICE': 'header label - always visible', });
lyr_CONTRADEDIPROGETTO.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'hidden field', 'PAVIMENTAZIONE': 'header label - always visible', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', 'DENOMINAZIONE DI PROGETTO': 'header label - always visible', 'CODICE': 'header label - always visible', });
lyr_CENTROSTORICODIPROGETTO.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'hidden field', 'PAVIMENTAZIONE': 'hidden field', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', 'DENOMINAZIONE DI PROGETTO': 'header label - always visible', 'CODICE': 'header label - always visible', });
lyr_RELITTIESTRADERURALI.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'header label - always visible', 'PAVIMENTAZIONE': 'header label - always visible', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', });
lyr_CONTRADE.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'header label - always visible', 'PAVIMENTAZIONE': 'header label - always visible', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', });
lyr_CENTROSTORICO.set('fieldLabels', {'fid': 'hidden field', 'dxf_handle': 'hidden field', 'Comparto': 'hidden field', 'foglio_catastale_di_riferimento': 'hidden field', 'codice_inizio': 'hidden field', 'codice_fine': 'hidden field', 'TIPO DI STRADA': 'header label - always visible', 'Odonimo_storico': 'header label - always visible', 'Odonimo_da_individuare': 'hidden field', 'lunghezza_strada_in_ml': 'hidden field', 'LUNGH': 'hidden field', 'DENOMINAZIONE ATTUALE': 'header label - always visible', 'PAVIMENTAZIONE': 'header label - always visible', 'RELITTO CATASTALE': 'hidden field', 'LUNGHEZZA': 'header label - always visible', });
lyr_FogliCatastali.set('fieldLabels', {'fid': 'no label', 'Codice_comune': 'no label', 'Foglio': 'no label', 'Mappale': 'no label', 'Allegato': 'no label', 'Sviluppo': 'no label', 'Htxt': 'no label', 'Rtxt': 'no label', 'Xtxt': 'no label', 'Ytxt': 'no label', });
lyr_CONFINECOMUNALE.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHandle': 'hidden field', 'Text': 'no label', });
lyr_CONFINIISTAT.set('fieldLabels', {'fid': 'no label', 'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
