let font;

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup() {
  createCanvas(1000, 1000);

  background(0);

  frameRate(20)
  createLoop({
    duration:10, gif:true
  })

  fill(255);
  noStroke();
  
  textAlign(CENTER,CENTER);
  textFont(font, 1000);
  text('E', 500,450);

}

function draw() {
  fill(0);
  let s = random(50);
    ellipse(random(width),random(height),s,s);
  }
  

function mousePressed(){
	saveCanvas("sketch_01","png")
}