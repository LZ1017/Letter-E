function setup(){
	var c = createCanvas(1000,1000);
	background(255);
}

function draw(){

	strokeWeight(100);
	strokeCap(ROUND);

	line(200,200,200,800);
	line(200,200,700,200);
	line(200,500,550,500);
	line(200,800,700,800);


}

// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }