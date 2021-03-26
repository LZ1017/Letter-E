// var font

var img

function preload(){
  // font = loadFont("Bubblegum.ttf");
  img = loadImage("e.png");
}


function setup(){
  createCanvas(1000,1000);
  background(255);

   frameRate(20)
    createLoop({
        duration:10, gif:true
  })
    
  // textFont(font);
  // textSize(800);
  textAlign(CENTER,CENTER);
  fill(0);
  // text('E',200,450,800);
  image (img,100,0)
}

function draw(){
  var x1 = random(0,width);
  var y1 = 0;
  var x2 = round (x1 + random (-100,10));
  var y2 = round (random(-10,50));
  var w = random(50,50);
  var h = height;
  copy (img, x1,y1,w,h,x2,y2,w,h);

}

function mousePressed(){
  saveCanvas("sketch_01","png")
}