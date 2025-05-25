// Define Area of Interest (AOI)
var aoi = ee.Geometry.Point([-122.292, 37.901]); // You can change this

// Filter Landsat 8 TOA image collection
var image = ee.ImageCollection("LANDSAT/LC08/C02/T1_TOA")
  .filterBounds(aoi)
  .filterDate('2019-07-01', '2019-07-31')
  .sort('CLOUD_COVER')
  .first();

// Select RGB bands and Panchromatic band
var rgb = image.select(['B4', 'B3', 'B2']); // Red, Green, Blue
var pan = image.select('B8'); // Panchromatic (15m)

// Convert RGB to float for math operations
rgb = rgb.divide(ee.Number(1.0));

// Apply Brovey Transform
var sum = rgb.reduce(ee.Reducer.sum());
var brovey = rgb.divide(sum).multiply(pan).rename(['B4', 'B3', 'B2']);

// Visualize
Map.centerObject(image, 10);
Map.addLayer(rgb, {min: 0, max: 0.3}, 'Original RGB (30m)');
Map.addLayer(pan, {min: 0, max: 0.3}, 'Panchromatic (15m)');
Map.addLayer(brovey, {min: 0, max: 0.3}, 'Pansharpened RGB (Brovey)');
