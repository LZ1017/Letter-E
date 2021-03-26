let font;
var r = 3;

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup(){
	createCanvas(1000,1000);
}


function draw(){
	background(0);

	translate(width/2, height/2);
	rotate(r/30);
	r = r+0.5;

	fill (255);
	textSize(550);
	textFont(font)
	text('E', 0 ,0 )
}

function mousePressed(){
	saveCanvas("sketch_6_2","png")
}