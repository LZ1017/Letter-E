function setup() {
	createCanvas(500, 500, WEBGL);
}

function draw() {
	background(0);
	stroke(200);
	fill(240, 150, 150);
	rotateX(millis() / 1000);
	rotateY(radians(mouseY));
	translate(0, -150);
	box(200, 45, 45);
	translate(0, 150);
	box(200, 45, 45);
	translate(0, 150);
	box(200, 45, 45);

	translate(-78,-150);
	box(45,345,45);

}

// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }