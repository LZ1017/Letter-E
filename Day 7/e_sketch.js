var font;
var points;
var vehicles = [];

function preload(){
	font = loadFont("Bubblegum.ttf");
}

function setup(){
	createCanvas(1000,1000);
	background(0)
	// textFont(font);
	// textSize(800);
	// fill(255)
	// noStroke();
	// text('E',300,800);
	
	points = font.textToPoints ('E',300,800,800);

	for(var i = 0; i <points.length;i+=3){//distance between each dot
		var pt = points[i];
		var vehicle = new Vehicle(pt.x,pt.y);
		vehicles.push(vehicle);
		// stroke(255);
		// strokeWeight(20);
		// point(pt.x,pt.y);

	frameRate(40)
	createLoop({
		duration:5, gif:true
	})


	}
}

function draw(){
	background(51);
	for (var i = 0; i <vehicles.length;i++){
		var v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}

function mousePressed(){
	saveCanvas("sketch_01","png")
}