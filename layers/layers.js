var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Prediosrurales_1 = new ol.format.GeoJSON();
var features_Prediosrurales_1 = format_Prediosrurales_1.readFeatures(json_Prediosrurales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prediosrurales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prediosrurales_1.addFeatures(features_Prediosrurales_1);
var lyr_Prediosrurales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prediosrurales_1, 
                style: style_Prediosrurales_1,
                interactive: true,
                title: '<img src="styles/legend/Prediosrurales_1.png" /> Predios rurales'
            });
var format_Prediosurbanos_2 = new ol.format.GeoJSON();
var features_Prediosurbanos_2 = format_Prediosurbanos_2.readFeatures(json_Prediosurbanos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prediosurbanos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prediosurbanos_2.addFeatures(features_Prediosurbanos_2);
var lyr_Prediosurbanos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prediosurbanos_2, 
                style: style_Prediosurbanos_2,
                interactive: true,
                title: '<img src="styles/legend/Prediosurbanos_2.png" /> Predios urbanos'
            });
var format_Vasrurales_3 = new ol.format.GeoJSON();
var features_Vasrurales_3 = format_Vasrurales_3.readFeatures(json_Vasrurales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vasrurales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasrurales_3.addFeatures(features_Vasrurales_3);
var lyr_Vasrurales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vasrurales_3, 
                style: style_Vasrurales_3,
                interactive: true,
                title: '<img src="styles/legend/Vasrurales_3.png" /> Vías rurales'
            });
var format_Lmitemunicipal_4 = new ol.format.GeoJSON();
var features_Lmitemunicipal_4 = format_Lmitemunicipal_4.readFeatures(json_Lmitemunicipal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitemunicipal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitemunicipal_4.addFeatures(features_Lmitemunicipal_4);
var lyr_Lmitemunicipal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmitemunicipal_4, 
                style: style_Lmitemunicipal_4,
                interactive: true,
                title: '<img src="styles/legend/Lmitemunicipal_4.png" /> Límite municipal'
            });
var format_Sitiosdeinteres_5 = new ol.format.GeoJSON();
var features_Sitiosdeinteres_5 = format_Sitiosdeinteres_5.readFeatures(json_Sitiosdeinteres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitiosdeinteres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitiosdeinteres_5.addFeatures(features_Sitiosdeinteres_5);
var lyr_Sitiosdeinteres_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitiosdeinteres_5, 
                style: style_Sitiosdeinteres_5,
                interactive: true,
                title: '<img src="styles/legend/Sitiosdeinteres_5.png" /> Sitios de interes'
            });
var format_RoChipaque_6 = new ol.format.GeoJSON();
var features_RoChipaque_6 = format_RoChipaque_6.readFeatures(json_RoChipaque_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoChipaque_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoChipaque_6.addFeatures(features_RoChipaque_6);
var lyr_RoChipaque_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoChipaque_6, 
                style: style_RoChipaque_6,
                interactive: true,
                title: '<img src="styles/legend/RoChipaque_6.png" /> Río Chipaque'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Prediosrurales_1.setVisible(true);lyr_Prediosurbanos_2.setVisible(true);lyr_Vasrurales_3.setVisible(true);lyr_Lmitemunicipal_4.setVisible(true);lyr_Sitiosdeinteres_5.setVisible(true);lyr_RoChipaque_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Prediosrurales_1,lyr_Prediosurbanos_2,lyr_Vasrurales_3,lyr_Lmitemunicipal_4,lyr_Sitiosdeinteres_5,lyr_RoChipaque_6];
lyr_Prediosrurales_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Analis': 'FID_Analis', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'P2111_': 'P2111_', 'P2111_ID': 'P2111_ID', 'CCDE': 'CCDE', 'CCMU': 'CCMU', 'CCZO': 'CCZO', 'CCSE': 'CCSE', 'CCMV': 'CCMV', 'CTER': 'CTER', 'NPRED': 'NPRED', 'Aream2': 'Aream2', 'AreaHa': 'AreaHa', 'ClasificAr': 'ClasificAr', 'FID_Munici': 'FID_Munici', 'OBJECTID_1': 'OBJECTID_1', 'MUNICIPIO': 'MUNICIPIO', 'Shape_Leng': 'Shape_Leng', 'AREA_HA': 'AREA_HA', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Prediosurbanos_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AceID': 'AceID', 'CCDE': 'CCDE', 'CCMU': 'CCMU', 'CCZO': 'CCZO', 'CCSE': 'CCSE', 'CCMV': 'CCMV', 'CTER': 'CTER', 'PRE_COD': 'PRE_COD', 'Designatio': 'Designatio', 'ParcelNumb': 'ParcelNumb', 'RegisterAr': 'RegisterAr', 'TemporaryP': 'TemporaryP', 'TitleID': 'TitleID', 'CREATIONDA': 'CREATIONDA', 'Shape_Leng': 'Shape_Leng', 'RIESGO_URB': 'RIESGO_URB', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'USO': 'USO', });
lyr_Vasrurales_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Shape_Leng': 'Shape_Leng', });
lyr_Lmitemunicipal_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MUNICIPIO': 'MUNICIPIO', 'AREA_HA': 'AREA_HA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sitiosdeinteres_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CLASE': 'CLASE', 'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Angle': 'Angle', 'ALTITUD': 'ALTITUD', 'COD_DANE_S': 'COD_DANE_S', 'ESTE': 'ESTE', 'FID_1': 'FID_1', 'ID': 'ID', 'MPIO': 'MPIO', 'NORTE': 'NORTE', 'OBJECTID_2': 'OBJECTID_2', });
lyr_RoChipaque_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NMG': 'NMG', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Prediosrurales_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Analis': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'P2111_': 'TextEdit', 'P2111_ID': 'TextEdit', 'CCDE': 'TextEdit', 'CCMU': 'TextEdit', 'CCZO': 'TextEdit', 'CCSE': 'TextEdit', 'CCMV': 'TextEdit', 'CTER': 'TextEdit', 'NPRED': 'TextEdit', 'Aream2': 'TextEdit', 'AreaHa': 'TextEdit', 'ClasificAr': 'TextEdit', 'FID_Munici': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'AREA_HA': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Prediosurbanos_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'AceID': 'TextEdit', 'CCDE': 'TextEdit', 'CCMU': 'TextEdit', 'CCZO': 'TextEdit', 'CCSE': 'TextEdit', 'CCMV': 'TextEdit', 'CTER': 'TextEdit', 'PRE_COD': 'TextEdit', 'Designatio': 'TextEdit', 'ParcelNumb': 'TextEdit', 'RegisterAr': 'TextEdit', 'TemporaryP': 'Range', 'TitleID': 'TextEdit', 'CREATIONDA': 'DateTime', 'Shape_Leng': 'TextEdit', 'RIESGO_URB': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'USO': 'TextEdit', });
lyr_Vasrurales_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Lmitemunicipal_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'AREA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sitiosdeinteres_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'CLASE': 'TextEdit', 'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Angle': 'TextEdit', 'ALTITUD': 'TextEdit', 'COD_DANE_S': 'TextEdit', 'ESTE': 'TextEdit', 'FID_1': 'TextEdit', 'ID': 'TextEdit', 'MPIO': 'TextEdit', 'NORTE': 'TextEdit', 'OBJECTID_2': 'TextEdit', });
lyr_RoChipaque_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'NMG': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Prediosrurales_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_Analis': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'P2111_': 'no label', 'P2111_ID': 'no label', 'CCDE': 'no label', 'CCMU': 'no label', 'CCZO': 'no label', 'CCSE': 'no label', 'CCMV': 'no label', 'CTER': 'no label', 'NPRED': 'no label', 'Aream2': 'no label', 'AreaHa': 'no label', 'ClasificAr': 'no label', 'FID_Munici': 'no label', 'OBJECTID_1': 'no label', 'MUNICIPIO': 'no label', 'Shape_Leng': 'no label', 'AREA_HA': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Prediosurbanos_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'AceID': 'no label', 'CCDE': 'no label', 'CCMU': 'no label', 'CCZO': 'no label', 'CCSE': 'no label', 'CCMV': 'no label', 'CTER': 'no label', 'PRE_COD': 'no label', 'Designatio': 'no label', 'ParcelNumb': 'no label', 'RegisterAr': 'no label', 'TemporaryP': 'no label', 'TitleID': 'no label', 'CREATIONDA': 'no label', 'Shape_Leng': 'no label', 'RIESGO_URB': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'USO': 'no label', });
lyr_Vasrurales_3.set('fieldLabels', {'OBJECTID': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Shape_Leng': 'no label', });
lyr_Lmitemunicipal_4.set('fieldLabels', {'OBJECTID': 'no label', 'MUNICIPIO': 'no label', 'AREA_HA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sitiosdeinteres_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'CLASE': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Angle': 'no label', 'ALTITUD': 'no label', 'COD_DANE_S': 'no label', 'ESTE': 'no label', 'FID_1': 'no label', 'ID': 'no label', 'MPIO': 'no label', 'NORTE': 'no label', 'OBJECTID_2': 'no label', });
lyr_RoChipaque_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'NMG': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_RoChipaque_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});