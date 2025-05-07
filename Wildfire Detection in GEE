// Define Ofunato, Japan as a point and buffer
var ofunato = ee.Geometry.Point([141.7167, 39.0667]);
var region = ofunato.buffer(10000); // 10km radius

// Set before/after fire dates (example: 2023 wildfire)
var beforeFire = ee.Date('2025-02-20');
var afterFire = ee.Date('2025-03-09');

// 1. Load Sentinel-2 HARMONIZED Surface Reflectance data
var beforeCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(region)              // Focus on Ofunato area
  .filterDate(beforeFire.advance(-2, 'month'), beforeFire); // Pre-fire period

var afterCollection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(region)              // Same area
  .filterDate(afterFire, afterFire.advance(2, 'month'));   // Post-fire period

// 2. Cloud masking function (uses QA60 band)
function maskClouds(image) {
  var qa = image.select('QA60');
  var cloudBitMask = 1 << 10;        // Bitmask for clouds
  var cirrusBitMask = 1 << 11;       // Bitmask for cirrus clouds
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)  // No clouds
    .and(qa.bitwiseAnd(cirrusBitMask).eq(0));   // No cirrus
  return image.updateMask(mask).divide(10000);     // Apply mask
}

// 3. Apply cloud mask and create median composite
var beforeImage = beforeCollection.map(maskClouds).median().clip(region);
var afterImage = afterCollection.map(maskClouds).median().clip(region);

// Display True-Color (B4=Red, B3=Green, B2=Blue)
var imageVisParam = {"opacity":1,"bands":["B4","B3","B2"],"min":-0.023095579812937778,"max":0.16999383743888336,"gamma":1};
Map.centerObject(region, 12);
Map.addLayer(beforeImage, imageVisParam, 'Before Fire');
Map.addLayer(afterImage, imageVisParam, 'After Fire');

// Calculate NBR
function addNBR(image) {
  var nbr = image.normalizedDifference(['B8', 'B12']).rename('NBR');
  return image.addBands(nbr);
}

var beforeNBR = addNBR(beforeImage);
var afterNBR = addNBR(afterImage);

// Compute difference (dNBR = beforeNBR - afterNBR)
var dNBR = beforeNBR.select('NBR').subtract(afterNBR.select('NBR'));

// Display burn severity
var severityPalette = ['blue', 'green', 'yellow', 'red'];
Map.addLayer(dNBR, {min: -1, max: 1, palette: severityPalette}, 'Burn Severity (dNBR)');

// Export results (optional)
Export.image.toDrive({
  image: dNBR,
  description: 'Ofunato_dNBR_S2_HARMONIZED',
  scale: 10,
  region: region,
  maxPixels: 1e9
});
