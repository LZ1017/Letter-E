function setup() {
	createCanvas(500, 500, WEBGL);
	background(0);
	frameRate(3)
	createLoop({
		duration:4, gif:true
	})
}

function draw() {
	stroke(240, 150, 150);
	noFill();
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