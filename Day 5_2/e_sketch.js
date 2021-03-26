function setup() {
	createCanvas(1000,1000);
	background(240);

	noLoop();
}

function draw() {

	for (i=0;i<600;i=i+=50){
		noStroke();
		fill(0,random(255),random(255),random(255));
		ellipse(240+i,240,80,80);

		fill(0,random(255),random(255),random(255));
		ellipse(240,240+i,80,80);

		fill(0,random(255),random(255),random(255));
		ellipse(240+i,500,80,80);

		fill(0,random(255),random(255),random(255));
		ellipse(240+i,820,80,80);

	}

}

function mousePressed(){
	saveCanvas("sketch_05_2","png")
}