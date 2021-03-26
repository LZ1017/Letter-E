function setup(){
	createCanvas(1000,1000);
	background(255);
	noLoop(); //this is to not have my computer go nuts, otherwise it draws it forever and ever forever
}

function draw(){

	fill('white')
	for (var i = 0;i<1000;i++){
		stroke(250);
		var al = random (30,255);
		var r_color = random(150,255);
		var g_color = random(150,255);
		var y = random(0,height);
		var x = random(0,width);
		var z = random(150,200);
		fill (r_color,g_color,0,al);
		ellipse(x,y,z,z);
	}

	noStroke();
	fill('#20639B');
	rect(200,100,600,150,50);
	rect(200,400,500,150,50);
	rect(200,700,600,150,50);
	rect(200,150,150,700,50);

}

// function mousePressed(){
// 	saveCanvas("sketch_01","png")
// }