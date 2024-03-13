// let engine = Matter.Engine.create();

class Grounded {
    constructor(x,y,w,h) {
        this.body = Matter.Bodies.rectangle(x, y, w, h);
        Composite.add(engine.world, this.body);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    show() {
        const pos = this.body.position;
        console.log(this.body);
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);


        rectMode(CENTER);

        
        rect(0,0,this.w,this.h);
        pop();
    }

}