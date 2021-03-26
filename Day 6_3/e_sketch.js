let font 
let offsetX = 10;
let gird = 5;

function preload(){
    font = loadFont('Bubblegum.ttf')
}

function setup(){
    createCanvas(1000,1000);
    textAlign(CENTER)
    textSize(800);
    textFont(font)
    noStroke();
    
}

function draw(){
    background(0);

    fill(0,255,255,250);
    text('E',500,800);

    fill (255,0,255,200);
    text('E',550,800)
}

function mousePressed(){
  saveCanvas("sketch_6_3","png")
}
