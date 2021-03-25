let font 

function preload(){
    font = loadFont('Bubblegum.ttf')
}

function setup(){
    createCanvas(1000,1000);
    background(255);
    stroke(0);
    strokeWeight(10);
    noFill();
    textFont(font)
    textSize(800);
    text('E',300,800);

}

function mouseMoved(){
    background(255);
    stroke(0);
    fill(random(255),0,random(255),random(255));
    textSize((mouseX-width/2)*5+1);
    text('E',width/2,mouseY);
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}