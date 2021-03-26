let font;

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup() {
  createCanvas(1000, 1000)
    background(0)

    frameRate(5)
  createLoop({
    duration:5, gif:true
  })

  fill(255);
  noStroke();
  
  textAlign(CENTER,CENTER);
  textFont(font, 1000);
  text('E', 500,450);

}

function mouseMoved() {
  fill(random(255));
  let s = random(50);
    ellipse(mouseX,mouseY,s,s);
  }
  

function mousePressed(){
	saveCanvas("sketch_01","png")
}