let fSize 
let pts = [] // store path data

function preload() {
    // preload OTF font file
    font = loadFont('Bubblegum.ttf')
}

function setup() {
    createCanvas(1000, 1000)
    
    //create textToPoint!!!
    textFont(font)
    textSize(600)
    pts = font.textToPoints('E', 300, 150, 800, {
      sampleFactor: 0.1, // increase for more points
      simplifyThreshold: 0.0 // increase to remove collinear points
    })

    stroke(255)
    strokeWeight(2)
    noFill();
}

function draw() {
    background(0)

    const d = 10 + sin(frameCount/50.) * 60
    const angle = frameCount/100.

    push()
    translate(60, height*5/8)

    for (let i = 0; i < pts.length; i+=1) {
        const p = pts[i]
        push()
        translate(p.x, p.y)
        rotate(angle)
        ellipse(-d, -d, +d, +d)
        pop()
    }
    pop()
}

function mousePressed(){
  saveCanvas("sketch_01","png")
}