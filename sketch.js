const phens = []

let bgCol = 255
let strokeCol = 0
const numPhenomenons = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  for (let i = 0; i < numPhenomenons; i++) {
    phens.push(new Phenomenon(random(windowWidth), random(windowHeight), 40));
  }
}

function draw() {

  background(bgCol);
  stroke(strokeCol)
  fill(strokeCol)

  for (let phen of phens) {
    phen.mapMouseY()
    phen.move()
    phen.develop()
    phen.show()
    // phen.showOrbit()
  }

  // compar distances and draw lines
  compareDistances()
}

function compareDistances() {
  for (let i = 0; i < phens.length - 1; i += 1) {
    let currentX = phens[i].x
    let currentY= phens[i].y
    // compare rest of phens
    for (let j = i + 1; j < phens.length; j += 1) {
      let nextX = phens[j].x
      let nextY = phens[j].y
      let distPhens = dist(currentX, currentY, nextX, nextY)
      // draw Line if short distance
      if (distPhens < 100) {
        line(currentX, currentY, nextX, nextY)
      }
    }
  }
}

function mouseClicked() {
    if (bgCol == 255) {
      bgCol = 0
      strokeCol = 255
    } else {
      bgCol = 255
      strokeCol = 0
    }
}