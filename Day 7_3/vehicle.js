var diameter = 30
var multFactor = 10
var fleeMultFactor = 5

function mousePressed() {
  multiFactor = -1
}

function mouseReleased(){
  multFactor = 1
}
      
  function Vehicle(x,y) {
  // this.pos = createVector();
  this.pos = createVector(x, random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 5;
  this.maxspeed = 15;
  this.maxforce = 2;
}

Vehicle.prototype.behaviors = function () {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(fleeMultFactor);
  // flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);
};

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
} 

Vehicle.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function(){
  stroke(255, 100)
  fill(255)
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y); 
  rect(this.pos.x, this.pos.y, 50, .05);
 
};

Vehicle.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < diameter) {
    desired.setMag(this.maxspeed);
    desired.mult(multFactor);
    var steer = p5.Vector.sub(desired, this.vel); 
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

