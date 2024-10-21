let phens = []

// Task:
// Eine Funktion, die die Distanzen zwischen den P. vergleicht

// Task:
// Etwas, das darüber Buch führt, welche P. verbunden werden

// Task:
// Die Verbindungen zeichnen

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    phens.push(new Phenomenon(random(400), random(400), 40));
  }
}

function draw() {
  background(120);
  for (let phen of phens) {
    phen.show()
  }
}
