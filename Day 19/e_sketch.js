let img
let tiles
let tileSize
let points = [] 
let loopDuration = 4 * 60

function preload() {
  img = loadImage('e.png')
}

function setup() {
  createCanvas(900, 1000)

  frameRate(30)
  createLoop({
    duration:10, gif:true
  })
  
  rectMode(CENTER)
  
  fill(150)

  tiles = 40
  tileSize = width / tiles
  
  for (let y = 0; y < height + tileSize * 2; y += tileSize) {
    for (let x = 0; x < width + tileSize * 2; x += tileSize) {
      let c = img.get(x, y)
      let b = map(brightness(c), 50, 100, 5, 30)
      fill(200)
      if (brightness(c) > 1) {
        points.push({x: x, y: y, b: b})
      }
    }
  }
}
function draw() {

  background(0, 60)
  
  fill(200)
  points.forEach(point => {
    ellipse(point.x , point.y , point.b)
  })
}


function mousePressed(){
  saveCanvas("sketch_01","png")
}