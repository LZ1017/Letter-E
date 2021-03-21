function setup() {
	createCanvas(1000,1000);

	noLoop();
}

function draw() {
	for (i=0;i<600;i=i+=10){


		fill(random(255));
		quad(200+i,200,230+i,190,210+i,250,180+i,260);

		fill(random(255));
		quad(200+i,500,230+i,490,210+i,550,180+i,560);

		fill(random(255));
		quad(200+i,800,230+i,790,210+i,850,180+i,860);


		fill(random(255));
		quad(200,200+i,230,190+i,210,250+i,180,260+i);


	}

}

// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }