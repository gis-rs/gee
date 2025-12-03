//Load and Filter the Sentinel-2 Collection
var sentinel2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterBounds(roi)
                  .filterDate('2024-08-01', '2025-08-30') // Adjust this date range as needed
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20)) // Max 10% cloud cover;
                  .median()
                  .clip(roi)

var visParams = {
  bands: ['B4', 'B3', 'B2'], // B4 (Red), B3 (Green), B2 (Blue)
  min: 0,
  max: 3000,
};

Map.addLayer(sentinel2, visParams, 'Sentinel-2 True Color');

//Load ROI and Training Data
var roi = "Your ROI Geometry"
var background = "Your Background Class FeatureCollection"
var burned = "Your Burned Class FeatureCollection"

// Center the map view on the rectangle.
Map.centerObject(roi, 10);

var annotations = background.merge(burned);

//Define the Bands and the Property
var bands = ['B2', 'B3', 'B4', 'B8', 'B11', 'B12']; 
var classProperty = 'class'; 

//Define the Classifier Parameters
var classifier = ee.Classifier.smileRandomForest({
  numberOfTrees: 100, // Common number of trees
  seed: 42 // Set a seed for reproducibility
});

//Sample the Image
var training = sentinel2.select(bands).sampleRegions({
  collection: annotations,
  properties: [classProperty],
  scale: 10,
  tileScale: 16
});

//Train the Classifier
var trainedClassifier = classifier.train({
  features: training,
  classProperty: classProperty,
  inputProperties: bands
});

// 5. Classify the Image
var classified = sentinel2.select(bands).classify(trainedClassifier);

// 6. Define Visualization (Palette)
var palette = [
  '#00FF00', 
  '#FF0000'  
];

// 7. Display the Classified Image
Map.addLayer(classified, {min: 0, max: 1, palette: palette}, 'RF Classified Image');

// Mask out all pixels that are NOT the burned class (Class 1).
var burnedMask = classified.eq(1);

// Apply the mask to the classified image itself.
var burnedArea = classified.updateMask(burnedMask);

// Define visualization for the burned area only (e.g., bright red).
var burnedVis = {
  min: 0,
  max: 1,
  palette: ['FF0000','FF00FF'] 
};

// Display the masked image.
Map.addLayer(burnedArea, burnedVis, 'Burned Area Only');

// Convert the masked raster image to a vector FeatureCollection.
var burnedPolygons = burnedArea.reduceToVectors({
  geometry: roi, // Use your original ROI
  crs: sentinel2.projection(), 
  scale: 10, 
  maxPixels: 1e13, 
  reducer: ee.Reducer.countEvery(), 
  labelProperty: 'burn_class' 
});

// Display the vector layer.
var vectorVis = {
  color: 'FF0000',
  fillColor: '00000000' // Transparent fill
};

Map.addLayer(burnedPolygons.style(vectorVis), {}, 'Burned Polygons (Vector)');

// Initiate the export task to Google Drive.
Export.table.toDrive({
  collection: burnedPolygons,
  description: 'Burned_Area_Shapefile_Export', 
  folder: 'GEE_Exports', 
  fileNamePrefix: 'Burned_Area',
  fileFormat: 'SHP'
});
