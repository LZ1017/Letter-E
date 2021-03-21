let font;
let pts;

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup(){
	createCanvas(1000,1000);

	pts = font.textToPoints('E', 200,600,1000,

	{
		sampleFactor:0.9,

	simplifyThreshold:0});
}

function ns(x,y,z,scale,min,max){
	return map(
		noise(x*scale,y*scale,z*scale),
		0,1,min,max)
	
}

let xz=0;
let yz=1000;

function draw(){
	background(0);
	noStroke();
	fill(random(255));
	push();
	translate(75, 275);
	for (let i = 0; i < pts.length; i++) {
		let xoff = ns(pts[i].x, pts[i].y, xz, 0.005, -50, 50);
		let yoff = ns(pts[i].y, pts[i].x, yz, 0.005, -50, 50);
		ellipse(pts[i].x + xoff, pts[i].y + yoff, 5, 5);
	}
	pop();
	xz += 2;
	yz += 2;
}

function mousePressed(){
	saveCanvas("sketch_01","png")
}