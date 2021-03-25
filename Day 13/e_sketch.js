let font 
let yStart = 0;


function preload(){
    font = loadFont('Bubblegum.ttf')
}

function setup(){
    createCanvas(1000,1000);
    textFont(font);
    textSize(200);
    textAlign(800,CENTER);
    
}

function draw(){
    background(0);
    for (let y = yStart; y < height; y +=200) {
        for (let x =0;x <height; x+=150){
        fill(255,y/2+55,100);
        text('E',x,y);
    }
    }
    yStart--;
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}
