let graphic
let font
let canvas

function preload() {
  font = loadFont('Bubblegum.ttf')
}

function setup() {
  createCanvas(1000, 1000)
  background(255)
  
  // create offscreen graphics buffer
  graphic = createGraphics(width, height)
  
  // type setup offscreen in buffer
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER)
  graphic.blendMode(SCREEN)

  graphic.textSize(1000)
  graphic.fill('rgba(194, 209, 229, 0.9)')
  graphic.text('E', width / 2, height / 2)

  graphic.textSize(950)
  graphic.fill('rgba(251, 75, 31, 0.9)')
  graphic.text('E', width / 1.9, height / 1.9)

  graphic.textSize(900)
  graphic.fill('rgba(251, 198, 208, 0.9)')
  graphic.text('E', width / 2.1, height / 2.1)
}

const loopDuration = 3 * 20

function draw() {
  
  let currentFrame = frameCount % loopDuration
  let t = currentFrame / loopDuration
  let u = map(t, 0, 1, 0, 2 * PI)

  background(0)
  
  const tiles = 60
  const tileSize = width / tiles
  
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      
      const distortionX = cos(u + x * 0.5) * 30
      const distortionY = sin(u + y * 0.5) * 20
      
      const sx = x * tileSize + distortionX
      const sy = y * tileSize + distortionY
      const sw = tileSize + distortionX
      const sh = tileSize + distortionY

      const dx = x * tileSize
      const dy = y * tileSize
      const dw = tileSize
      const dh = tileSize

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
  
  if (frameCount === 1) {
    saveCanvas('sketch)01', 'png');
  }
}

