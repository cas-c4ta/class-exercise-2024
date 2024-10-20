let phenomeon

function setup() {
  createCanvas(400, 400);
  phenomenon = new Phenomenon(200, 200, 10);
}

function draw() {
  background(120);
  phenomenon.show();
}