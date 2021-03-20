const X_AXIS = 1;
let c1, c2;

function setup(){
	createCanvas(1000,1000);
	background(255);

	c1 = color(180,40,40);
	c2 = color(100,40,40);

}

function draw(){

	strokeWeight(150);
	strokeCap(SQUARE);
	stroke(100,40,40);
	line(200,200,200,750);

	//setGradient(startpoint(lr),startpoint(ub),endpoint(lr),thickness)
	noStroke();
	setGradient(200,100,450,150,c2,c1,X_AXIS);
	setGradient(200,400,300,150,c2,c1,X_AXIS);
	setGradient(200,700,450,150,c2,c1,X_AXIS);

	noStroke();
	fill(222, 100, 100);
	rect(650,100,120,150,50);
	rect(500,400,120,150,50);
	rect(650,700,120,150,50);




	// strokeWeight(100);
	// strokeCap(ROUND);

	// line(200,200,700,200,c1,c2,X_AXIS);
	// line(200,500,550,500,c1,c2,X_AXIS);
	// line(200,800,700,800,c1,c2,X_AXIS);

	// stroke(180,40,40);
	// line(200,200,200,800);

}

function setGradient(x,y,w,h,c1,c2,axis){
	noFill();

	if (axis ===X_AXIS){
		for (let i =x; i<=x+w; i++){
			let inter = map(i,x,x+w,0,1);
			let c = lerpColor(c1,c2,inter);
			stroke (c);
			line(i,y,i,y+h);
		}
	}
}
// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }