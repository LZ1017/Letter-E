let font;
var vehicles = [];

function preload() {
  font = loadFont('Bubblegum.ttf')
}

function setup() {
  createCanvas(1000, 1000)
  background(0);
  frameRate(10)
  createLoop({
    duration:5, gif:true
  })
  
   var points = font.textToPoints('E', 300, 800, 800, {
    sampleFactor: 0.2});
  
  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
     
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
      
    push();
    pop();
  }
}

// function mousePressed(){
//   saveCanvas("sketch_07_2","png");
// }