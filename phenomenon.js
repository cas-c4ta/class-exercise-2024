class Phenomenon {
  constructor(x, y, s) {
    this.orbitRadius = 10 // wie wird das bestimmt?
    this.orbitCenter = {cx, cy} // wie bestimmen wir das?
    // wie bestimmt man das?
    this.orbitAngle = random(2*PI) // wie wird das bestimmt?
    this.orbitSpeed = 0.01 // wie wird das bestimmt?
    this.x = this.orbitRadius * cos(this.orbitAngle) 
    this.y = this.orbitRadius * sin(this.orbitAngle) 

    this.shapeOptions = ["circle", "square", "triangle"]
    this.shape = this.shapeOptions[floor(random(this.shapeOptions.length))]
    this.size = s;
  }

  move() {
    // this.orbitAngle muss wachsen, um this.orbitSpeed
    this.orbitAngle += this.orbitSpeed
    this.x = this.orbitRadius * cos(this.orbitAngle) 
    this.y = this.orbitRadius * sin(this.orbitAngle) 
  }

  show() {
    fill(this.redValue, this.greenValue, this.blueValue)
    if (this.shape == "circle") {
      ellipse(this.x, this.y, this.size);
    } else if (this.shape == "square") {
      square(this.x, this.y, this.size);
    } else { // triangle
      triangle(this.x, this.y,
        this.x + this.size, this.y,
        this.x, this.y + this.size
        // task: verschönern bei Gelegenheit
      )
    }
  }
}