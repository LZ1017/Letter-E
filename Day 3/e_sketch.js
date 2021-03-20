function setup(){
	createCanvas(1000,1000);
	background(255);
	noLoop(); //this is to not have my computer go nuts, otherwise it draws it forever and ever forever
}

function draw(){

	for (var i = 0; i<2000; i+=50){
		strokeWeight(8);
		line(i,0,0,i);
	}

	noStroke();
	fill(255);
	rect(200,100,600,150,50);
	rect(200,400,500,150,50);
	rect(200,700,600,150,50);
	rect(200,200,150,600,50);

}

function mousePressed(){

}