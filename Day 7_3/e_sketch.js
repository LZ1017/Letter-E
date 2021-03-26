let font
let text = ["E"];

let index = 0;

function preload() {
  font = loadFont('Bubblegum.ttf')
}

function setup() {
  createCanvas(1000, 1000)
    background(0)

    frameRate(10)
  createLoop({
    duration:5, gif:true
  })
  noStroke()
}

function draw() {

  points = font.textToPoints(text[index], 0,0, 800)

  translate(300, 800)
  for (let pt of points) {

  fill(random(255),random(255))
  ellipse(pt.x, pt.y, 5)
  pt.x += random(-1, 0.6)
  pt.y += random(-1, 0.6)
  rect(pt.x, pt.y, 100, 2)
    
  }
}
function mousePressed(){
  saveCanvas("sketch_07_3","png");
}