class Phenomenon {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.size = s
  }

  show() {
    ellipse(this.x, this.y, this.size)
  }
}