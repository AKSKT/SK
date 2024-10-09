var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_postcodemap_1 = new ol.format.GeoJSON();
var features_postcodemap_1 = format_postcodemap_1.readFeatures(json_postcodemap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postcodemap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postcodemap_1.addFeatures(features_postcodemap_1);
var lyr_postcodemap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postcodemap_1, 
                style: style_postcodemap_1,
                popuplayertitle: "postcode map",
                interactive: true,
                title: '<img src="styles/legend/postcodemap_1.png" /> postcode map'
            });

lyr_OSMStandard_0.setVisible(true);lyr_postcodemap_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_postcodemap_1];
lyr_postcodemap_1.set('fieldAliases', {'Postcode': 'Postcode', 'X': 'X', 'Y': 'Y', 'Population': 'Population', });
lyr_postcodemap_1.set('fieldImages', {'Postcode': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Population': 'TextEdit', });
lyr_postcodemap_1.set('fieldLabels', {'Postcode': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', 'Population': 'header label - visible with data', });
lyr_postcodemap_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});