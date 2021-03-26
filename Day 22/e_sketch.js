let tiles
let tileSize
let pg
let img
let points = []
let loopDuration = 2 * 60
let theta = 0

function preload() {
  img = loadImage('e.png')
}

function setup() {
  createCanvas(1000, 1000)

   frameRate(20)
    createLoop({
        duration:5, gif:true
  })
    
  textAlign(CENTER,CENTER)

  tiles = 100
  tileSize = width / tiles
  
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let c = img.get(x * tileSize + tileSize * 1, y * tileSize + tileSize * 1)
      let b = brightness(c)
      points.push({x: x * tileSize + tileSize * 2, y: y * tileSize + tileSize * 2, b: b})
    }
  }
}

function draw() {
  background(0, 50)
  rectMode(CENTER)
  strokeWeight(3)
  stroke(230)
  fill(230)
  
  points.forEach(point => {
    let b = map(point.b, 0, 100, tileSize / 1.5, tileSize)
    let len = b
    if (point.b > 1) {
      let a = atan2(point.y - height / 2, point.x - width / 2)
      push()
      translate(point.x, point.y)
      rotate(a + theta)
      beginShape()
      vertex(0, 0)
      vertex(len, len)
      endShape()
      pop()
    } else {
      ellipse(point.x, point.y, 1)
    }
  })
  
  theta += TWO_PI / 120
}


function mousePressed(){
  saveCanvas("sketch_01","png")
}
