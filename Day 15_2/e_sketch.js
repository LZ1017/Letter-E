let font

var x =0;
var y =10;
var easing = 0.05;

function preload () {
  font = loadFont('Bubblegum.ttf')
}

function setup () {
  createCanvas(1000, 1000)
  textFont(font);
  pixelDensity(5);
  frameRate(30);
  background(0)
}

function draw () {
 var targetX=mouseX;
  var targetY=mouseY
  x += (targetX - x) *easing;
  y += (targetY - y) *easing;

  if (mouseIsPressed) {   
  textSize(800);
  // fill(80, 100)
  stroke(255)
  text ('E', x, y)

    } else {
  textSize(600);
   stroke(255,0,0)
  text ('E', x, y)
      }       
}

// function mousePressed(){
//   saveCanvas("sketch_01","png")
// }