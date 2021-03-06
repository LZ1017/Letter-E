let fSize 
let pts = [] // store path data

function preload() {
    // preload OTF font file
    font = loadFont('Bubblegum.ttf')
}

function setup() {
    createCanvas(1000, 1000)

    frameRate(20)
  createLoop({
    duration:10, gif:true
  })
    
    
    //create textToPoint!!!
    textFont(font)
    textSize(600)
    pts = font.textToPoints('E', 200, 170, 800, {
      sampleFactor: 0.1, // increase for more points
      simplifyThreshold: 0.0 // increase to remove collinear points
    })

    stroke(255)
    strokeWeight(2)
    noFill();
}

function draw() {
    background(0)

    const d = 20 + sin(frameCount/50.) * 40
    const angle = frameCount/100.

    push()
    translate(60, height*5/8)

    for (let i = 0; i < pts.length; i+=1) {
        const p = pts[i]
        push()
        translate(p.x, p.y)
        rotate(angle)
        triangle(-d, -d, +d, +d,-d,+d)
        pop()
    }
    pop()
}

function mousePressed(){
  saveCanvas("sketch_11_3","png")
}