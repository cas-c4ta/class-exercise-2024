

class Phenomenon {
  constructor(x, y, s) {
    // this.orbitRadius = random(30, 60) // Zufallsradius
    this.orbitRadius = 0

    this.orbitCenter = {x: 200, y:200} // wie bestimmen wir das?

    // wie bestimmt man das?
    this.orbitAngle = random(2*PI) // wie wird das bestimmt?
    // console.log(this.orbitAngle)
    this.orbitSpeed = 0.01 // wie wird das bestimmt?

    this.shapeOptions = ["circle", "square", "triangle"]
    this.shape = this.shapeOptions[floor(random(this.shapeOptions.length))]
    this.size = s;
    
    // Mel’s Code
    this.x = x;
    this.y = y;
    let cx = null;
    let cy = null;

    // Define Orbit Center
    if (0 <= this.orbitAngle <= PI / 2 || 3 * PI / 2 <= this.orbitAngle <= TWO_PI) {
      // Winkel ist zwischen Null und 90 oder zwischen 270 und 360
      cx = this.x - this.orbitRadius * cos(this.orbitAngle)
    } else {
      cx = this.x + this.orbitRadius * cos(this.orbitAngle)
    }
    if (0 <= this.orbitAngle <= PI) { // Winkel 0 und 180 grad
      cy = this.y - this.orbitRadius * sin(this.orbitAngle)
    } else {
      cy = this.y + this.orbitRadius * sin(this.orbitAngle)
    }
    this.orbitCenter = { cx, cy } 

  }

  move() {
    // this.orbitAngle muss wachsen, um this.orbitSpeed
    this.orbitAngle += this.orbitSpeed
    this.x = this.orbitCenter.cx + this.orbitRadius * cos(this.orbitAngle) 
    this.y = this.orbitCenter.cy + this.orbitRadius * sin(this.orbitAngle) 
  }

  mapMouseY() {
     this.orbitRadius = map(mouseY, 0, height, 30, 60) // abhängig von Cursor
  }

  showOrbit() {
    // center
    push()
    fill(255, 0, 0)
    noStroke()
    ellipse(this.orbitCenter.cx, this.orbitCenter.cy, 4)
    stroke(255, 0, 0)
    noFill()
    ellipse(this.orbitCenter.cx, this.orbitCenter.cy, this.orbitRadius*2)
    pop()
  }

  show() {
    // fill(this.redValue, this.greenValue, this.blueValue)
    // Task:
    // Objekte auf Orbit zentrieren
    if (this.shape == "circle") {
      ellipse(this.x, this.y, this.size);
    } else if (this.shape == "square") {
      square(this.x, this.y, this.size);
    } else { // triangle
      const tes = this.size/12 // tes = triangle extra sauce (typographic geek stuff)
      triangle(
        this.x - this.size/2 - tes, this.y - this.size/2,
        this.x + this.size/2 + tes, this.y - this.size/2,
        this.x, this.y + this.size/2
      )
    }
  }
}