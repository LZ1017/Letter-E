let font;
let points;
let bounds;

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup() {
   createCanvas(1000, 1000)
    background(0)

    frameRate(10)
  createLoop({
    duration:5, gif:true
  })

  points = font.textToPoints(
    'E', 0, 0, 800, {
      sampleFactor: 3,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(
    'E', 0, 0, 800);

  cursor(CROSS);
  fill(255, 127);
  noStroke();
}

function draw() {
  background(0);
  
  stroke(51);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  noStroke();
  
  let centerDist = dist(mouseX, mouseY, width / 2, height / 2);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  	transparency = constrain(transparency, 100, 200); // the vaule of transparency
	fill(255, transparency);
  
  let jiggle = map(centerDist, 0, width, 1, 300);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);
    for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x + jiggle * randomGaussian(), 
      p.y + jiggle * randomGaussian(), 10, 10);
  }
}

function mousePressed(){
	saveCanvas("sketch_01","png")
}