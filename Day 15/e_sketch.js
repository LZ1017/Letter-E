let font;

function preload(){
    font = loadFont('Bubblegum.ttf')
}

function setup(){
  createCanvas(1000,1000);
  background(255);

  stroke(255,0,255);
  noFill();
  textFont(font);
  textSize(300);
  textAlign(CENTER, CENTER);

}

function mouseMoved(){
  background(255);
  noStroke();
  fill(255,0,255);
  textSize((mouseX-width/2)*5+1);
  text('E', width/2, mouseY);

}

function mouseMoved(){
  stroke(random(255),0,255);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text('E', width/2, mouseY);
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}