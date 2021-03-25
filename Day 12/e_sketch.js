let xStart = 0;
let font 

function preload(){
    font = loadFont('Bubblegum.ttf')
}

function setup(){
    createCanvas(1000,1000);
    
}

function draw(){
    background(0);
    for (let x = xStart; x<width; x+=500){
        for (let y = 0; y <height; y+=900){
            fill (x, 150, y);
            textFont(font);
            textSize(1000);
            text('E', x, y);
        }
    }
    xStart--;
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}
