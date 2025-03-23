// Load a Landsat image and display it.
var image = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
             .filterBounds(ee.Geometry.Point([-22, -12]))
             .filterDate('2020-01-01', '2020-12-31')
             .median();

// Center the map on the image.
Map.centerObject(image, 10);

// Add the image to the map.
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 0.3}, 'Landsat Image');
