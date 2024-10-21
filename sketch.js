let phens = []

// Task:
// Eine Funktion, die die Distanzen zwischen den P. vergleicht

// Task:
// Etwas, das darüber Buch führt, welche P. verbunden werden

// Task:
// Die Verbindungen zeichnen

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  for (let i = 0; i < 10; i++) {
    phens.push(new Phenomenon(random(400), random(400), 40));
  }
}

function draw() {
  background(120);
  for (let phen of phens) {
    phen.mapMouseY()
    phen.move()
    phen.show()
    // phen.showOrbit()
  }
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
        push()
        stroke(255)
        line(currentX, currentY, nextX, nextY)
        pop()
      }
    }
  }
}
