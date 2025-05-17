var roi = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-123.22049462050695, 38.34560172962674],
          [-123.22049462050695, 37.28679718316494],
          [-121.01773583144445, 37.28679718316494],
          [-121.01773583144445, 38.34560172962674]]], null, false),
    urban = 
    /* color: #ff0101 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-122.50077799991315, 37.760095547375606]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.49013499454206, 37.757109815614555]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.41632060245222, 37.78967492085065]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.4156339569444, 37.77447965668657]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.4043043060655, 37.76905201959248]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.39709452823347, 37.74326530296051]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.4101407928819, 37.70742042032684]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.44206980899519, 37.715025329869235]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.46163920596784, 37.717469599325234]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.420783798253, 37.76552384183346]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.28860453799909, 37.81463178675051]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.27075175479597, 37.80188313712415]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.31847361758894, 37.784248399404156]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.18972758487409, 37.750052152423116]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.22268656924909, 37.772308649659216]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.23023966983503, 37.78967492085065]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.36001567081159, 37.93116614815775]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.37306193546003, 37.960947646887]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.34868601993269, 37.971232995564904]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.33048991397565, 37.9409141492386]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.50489787296003, 37.964737153497396]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.52069071963972, 37.966090501322476]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.29238108829206, 37.85449101358813]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.29821757510847, 37.87888399165122]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.31813029483503, 37.92222934489028]),
            {
              "landcover": 0,
              "system:index": "24"
            })]),
    vegetation = 
    /* color: #2ba013 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-122.56806925967878, 37.87427704771308]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.55673960879987, 37.86858571918088]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.54403666690534, 37.86533333405895]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.52069071963972, 37.861267650789]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.54077510074323, 37.84500267489293]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.50541285709089, 37.84378265704833]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.50009135440534, 37.829683208987056]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.49133662418073, 37.839986916906035]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.52292231754011, 37.838360111331134]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15981633259372, 37.823375226571244]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15174824787692, 37.821612455412584]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.17921406818942, 37.82351082260882]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15706975056247, 37.80560999181461]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.14127690388278, 37.80615250500243]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.13080555988864, 37.8034398992096]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.13286549641208, 37.78784048247381]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15003163410739, 37.79584407295022]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.67857701374606, 37.96545598962521]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.66141087605075, 37.951109109621775]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.62364537312106, 37.93730097558733]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.59549290730075, 37.93675942726477]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.57008702351169, 37.932156105427204]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.58484990192966, 37.91157302409051]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.92794883264925, 37.90337233528479]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.94511497034456, 37.893890290745645]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.92073905481722, 37.899308751487155]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.9058045150223, 37.84741061785046]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.8980797530594, 37.84591953087743]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.88657844080355, 37.842530584718986]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.85602271570589, 37.84524175410445]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.87147223963167, 37.84551286556116]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.4879827357686, 37.92992436714704]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.49450586809282, 37.924237340146014]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.54308603777055, 37.90419383452986]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.54737757219438, 37.895795607790994]),
            {
              "landcover": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.57982157243852, 37.933580080796865]),
            {
              "landcover": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.57432840837602, 37.90893434578756]),
            {
              "landcover": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.55029581560258, 37.92938276447907]),
            {
              "landcover": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.47974298967485, 37.91611225285448]),
            {
              "landcover": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.53003977312211, 37.881299640014426]),
            {
              "landcover": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.52317331804399, 37.88197708524913]),
            {
              "landcover": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.56216629038622, 37.97529826938714]),
            {
              "landcover": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.610574798687, 37.96447214616181]),
            {
              "landcover": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.8800831605034, 37.92385996735657]),
            {
              "landcover": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.88832290659715, 37.93956600465053]),
            {
              "landcover": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.85914047251512, 37.89406343969776]),
            {
              "landcover": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.78944595347215, 37.87888966347047]),
            {
              "landcover": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.79528244028856, 37.86859139179305]),
            {
              "landcover": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.81004531870653, 37.86344171612039]),
            {
              "landcover": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.92093856821825, 37.88403825944237]),
            {
              "landcover": 1,
              "system:index": "49"
            })]),
    water = 
    /* color: #1596ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-122.44210250864793, 38.04292536169091]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.40502365122606, 38.09482060505592]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.37618453989793, 38.05265852391547]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.06994064341356, 38.075364203065554]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.36657150278856, 37.86859139179305]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.31987960825731, 37.729695420256014]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.27868087778856, 37.680372015955236]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.26769454966356, 37.64884615455398]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15645797739793, 37.541122547342944]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.07818038950731, 37.46486026404267]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.70440109263231, 37.808511513593025]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.63214809407167, 37.61613713782564]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.60330898274354, 37.515991454213086]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.58820278157167, 37.70745686677414]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.84226161946229, 37.889759079752565]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.88483364094667, 37.97208125133633]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.44263393391542, 37.92443228187674]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.94824916829042, 38.06296162676021]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.84525234211854, 38.059717839827016]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.60492641438417, 38.044037509278745]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.7333291243451, 38.02889469275407]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.15904933918885, 38.035925675506554]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.31903774250917, 38.04133366452904]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.02309352864198, 38.12456625209698]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.57334072102479, 37.836634080965204]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.74362880696229, 37.81439695559658]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-121.7333291243451, 37.82795697560884]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.38838893879823, 37.854527387589975]),
            {
              "landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.44606716145448, 37.82524517090626]),
            {
              "landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-122.59987575520448, 37.86320136728206]),
            {
              "landcover": 2,
              "system:index": "29"
            })]);
            
// Load the Landsat 8 image collection.
var landsatCollection = ee.ImageCollection('LANDSAT/LC08/C02/T1')
  .filterDate('2024-01-01', '2024-12-31')
  .filterBounds(roi)
  .map(function(image){
    return image.clip(roi);
  });

// Make a cloud-free composite.
var composite = ee.Algorithms.Landsat.simpleComposite({
  collection: landsatCollection,
  asFloat: true
});

Map.addLayer(composite,{bands:['B4', 'B3', 'B2'], min:0, max:0.3},'composite');

// Merge the three geometry layers into a single FeatureCollection.
var newfc = urban.merge(vegetation).merge(water);

// Use these bands for classification.
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// The name of the property on the points storing the class label.
var classProperty = 'landcover';

// Sample the composite to generate training data.
var training = composite.select(bands).sampleRegions({
  collection: newfc,
  properties: [classProperty],
  scale: 30
});

// Train a Random Forest classifier.
var classifier = ee.Classifier.smileRandomForest({
  numberOfTrees: 50,  // You can adjust this parameter
  variablesPerSplit: null,  // Defaults to square root of number of variables
  minLeafPopulation: 1,
  bagFraction: 0.5,  // Fraction of input to bag per tree
  seed: 0
}).train({
  features: training,
  classProperty: classProperty,
  inputProperties: bands
});

// Classify the composite.
var classified = composite.classify(classifier);
Map.centerObject(newfc);
Map.addLayer(classified, {min: 0, max: 2, palette: ['red', 'green', 'blue']});

// Print some info about the classifier.
print('Random Forest, explained', classifier.explain());

// Optionally, do some accuracy assessment.  First, add a column of
// random uniforms to the training dataset.
var withRandom = training.randomColumn('random');

// We want to reserve some of the data for testing, to avoid overfitting the model.
var split = 0.7;  // Roughly 70% training, 30% testing.
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

// Train another Random Forest with the training partition only
var trainedClassifier = ee.Classifier.smileRandomForest({
  numberOfTrees: 50,
  variablesPerSplit: null,
  minLeafPopulation: 1,
  bagFraction: 0.5,
  seed: 0
}).train({
  features: trainingPartition,
  classProperty: classProperty,
  inputProperties: bands
});

// Classify the test FeatureCollection.
var test = testingPartition.classify(trainedClassifier);

// Print the confusion matrix.
var confusionMatrix = test.errorMatrix(classProperty, 'classification');
print('Confusion Matrix', confusionMatrix);
