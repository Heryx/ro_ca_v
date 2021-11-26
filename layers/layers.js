ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32633").setExtent([791227.911969, 4464807.825113, 791489.433417, 4465004.146310]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Nuovolayertemporaneo_1 = new ol.format.GeoJSON();
var features_Nuovolayertemporaneo_1 = format_Nuovolayertemporaneo_1.readFeatures(json_Nuovolayertemporaneo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Nuovolayertemporaneo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuovolayertemporaneo_1.addFeatures(features_Nuovolayertemporaneo_1);
var lyr_Nuovolayertemporaneo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nuovolayertemporaneo_1, 
                style: style_Nuovolayertemporaneo_1,
                interactive: true,
                title: '<img src="styles/legend/Nuovolayertemporaneo_1.png" /> Nuovo layer temporaneo'
            });
var lyr_Roca_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Roca",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Roca_2.png",
    attributions: ' ',
                                projection: 'EPSG:32633',
                                alwaysInRange: true,
                                imageExtent: [791270.839200, 4464837.233400, 791430.258500, 4464983.297800]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Nuovolayertemporaneo_1.setVisible(true);lyr_Roca_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Nuovolayertemporaneo_1,lyr_Roca_2];
lyr_Nuovolayertemporaneo_1.set('fieldAliases', {});
lyr_Nuovolayertemporaneo_1.set('fieldImages', {});
lyr_Nuovolayertemporaneo_1.set('fieldLabels', {});
lyr_Nuovolayertemporaneo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});