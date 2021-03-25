let font;
let a = 0;
let s = 0;

// function preload(){
//     font = loadFont('Bubblegum.ttf')
// }

function setup(){
  createCanvas(1000,1000);
  background(255);
  textFont('Arial');
  textSize(300);
  textAlign(CENTER);
  strokeWeight(2)


}

function draw(){
  a = a +5;
  s = cos(a) * 1;

  translate (width/2,height/2);
  scale(s);
  stroke(0);
  noFill();
  text('E', 0,0,300);

  translate (200,250);
  stroke(255,0,0);
  noFill();
  // scale(s);
  text('e',0,0 ,300)

  translate (200,250);

  stroke(255,0,255);
  noFill();
  scale(random(50));
  text('E',-800,-100,400)

}

function mousePressed(){
  saveCanvas("sketch_01","png")
}