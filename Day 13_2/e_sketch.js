let font, points, flag
let colors = ['RED', 'ORANGE']
let loopDuration = 4 * 60

function preload() {
  font = loadFont('Bubblegum.ttf')
}

function setup() {
  createCanvas(1080, 1080)
  
  let text = 'E'
  let size = 20

  points = font.textToPoints(text, 0, 0, size, {
    sampleFactor: 5,
    simplifyThreshold: 0
  })
  bounds = font.textBounds(text, 0, 0, size)
  
  for (let i = 0; i < points.length; i++) {
    if (i < points.length - 1) {
      let p1 = createVector(points[i].x, points[i].y)
      let p2 = createVector(points[i + 1].x, points[i + 1].y)
      let diff = p1.dist(p2)
      if (diff > 2) {
        flag = i
        break
      }
    }
  }
}


function draw() {
  background('MAGENTA')

  blendMode(BLEND)
  strokeWeight(2)
  
  let scale = 20
  let speed = 1.1
  for (let k = 0; k < 3; k++) {
    push()
    translate(0, 340 + 320 * k)
    for (let j = 0; j < 3; j++) {
      push()
      translate(90 + j * 310, 0)
      for (let i = 0; i < colors.length; i++) {
        fill(colors[i])
        push()
        translate(scale * i, scale * i)
        beginShape()
        points.forEach((p, index) => {
          let x = p.x * scale + sin((10 + (k * 10)) * p.y / bounds.h + millis() / 1000 * speed) * (10 + (k * 10))
          let y = p.y * scale
          if (index < flag + 1) {
            vertex(x, y)
          }
        })
        beginContour() 
        points.forEach((p, index) => {
          let x = p.x * scale + sin((10 + (k * 10)) * p.y / bounds.h + millis() / 1000 * speed) * (10 + (k * 10))
          let y = p.y * scale
          if (index >= flag + 1) {
            vertex(x, y)
          }
        })
        endContour()
        endShape(CLOSE)
        pop()
      }
      pop()
    }
    pop()
  }
}
