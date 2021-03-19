function setup(){
	var c = createCanvas(1000,1000);
	background(255)



}

function draw(){
	strokeWeight(100);
	strokeCap(ROUND);

		line(200,200,200,800);
	for (var i = 200;i<900;i+=300){
		line(200,i,800,i);
	}
	// strokeCap(ROUND);
	// line(200,200,800,200); //line (x1,y1,x2,y2)
	// strokeCap(Round);
	// line(200,400,600,200)；
	// strokeCap(Round);
	// line(200,200,200,800);
}

// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }