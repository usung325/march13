
class Polygon {
    constructor(x,y, radius, nPoints){
        this.x = x;
        this.y = y;
        this.r = radius;
        this.s = nPoints;
    }

    polygon(x, y, radius, nPoints) {
        let angle = TWO_PI / nPoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }
}

