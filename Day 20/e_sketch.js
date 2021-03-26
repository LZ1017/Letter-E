let font
let tiles
let tileSize
let loopDuration = 2 * 60

function preload() {
  font = loadFont('Bubblegum.ttf')
}

function setup() {
  createCanvas(1000, 1000)


   frameRate(10)
    createLoop({
        duration:3, gif:true
  })
  noStroke()
  
  points = font.textToPoints('E', width / 3.8, height / 1.25, 800, {
    sampleFactor: 0.5,
    simplifyThreshold: 0
  })

  tiles = 20
  tileSize = width / tiles
}

function draw() {
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map((t), 0, 1, 0, PI)
  
  background(0, 50)

  points.forEach(point => {
    push()
    translate(point.x, point.y)
    rotate(u)

    fill('#F6D55C')
    ellipse(-6 * sin(u), -6 * sin(u), 40 + 400 * sin(u), 3)
    
    fill('#3CAEA3')
    ellipse(-8 * sin(u), -8 * sin(u), 40 + 300 * sin(u), 3)
    
    fill('#20639B')
    ellipse(0 * sin(u), 0 * sin(u), 40 + 200 * sin(u), 3)
    
    fill('#173F5F')
    ellipse(8 * sin(u), 8 * sin(u), 40 + 300 * sin(u), 3)
    
    fill('#ED553B')
    ellipse(6 * sin(u), 6 * sin(u), 40 + 400 * sin(u), 3)
    pop()
  })
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}
