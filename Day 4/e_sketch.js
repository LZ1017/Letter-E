function setup() {
	createCanvas(500, 500, WEBGL);
}

function draw() {
	background(0);
	stroke(200);
	fill(240, 150, 150);
	rotateX(radians(30));
	rotateY(radians(-30));
	translate(0, -150);
	box(200, 45, 45);
	translate(0, 150);
	box(200, 45, 45);
	translate(0, 150);
	box(200, 45, 45);

	translate(-78,-150);
	box(45,345,45);

}
