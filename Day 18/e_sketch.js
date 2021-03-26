let font
let points
const loopDuration = 4 * 60

function preload () {
  font = loadFont('Bubblegum.ttf')
}

function setup () {
  createCanvas(1000, 1000)

  points = font.textToPoints('e', 200, 0, 800, {
    sampleFactor: 5,
    simplifyThreshold: 0
  })
}

function draw () {
  let t = (frameCount % loopDuration) / loopDuration
  let v = map((t), 0, 100, 0, PI)

  background(0)
  fill(255)
  noStroke()

  translate(width / 3.5, height / 1.2)
  
  points.forEach((p, index) => {
    let wave = sin(v + (points.length - index) * 0.25) * 20
    let distortion = tan(v) * 10 * (Math.floor(random(0, index)) + 1)
    ellipse(p.x - distortion + wave * sin(v) , p.y + distortion + wave * sin(v), 4)
  })
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}