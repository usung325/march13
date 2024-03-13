
class Triang {
    constructor(x,y,s,r) {
        this.body = Matter.Bodies.polygon(x, y, s, r);
        Composite.add(engine.world, this.body);
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
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


    show() {
        console.log(this.body);

        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);


        rectMode(CENTER);

        
        polygon(this.x, this.y, this.r, this.s);
        pop();
        
        // triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
    }

}