let engine = Matter.Engine.create();

class Rectang {
    constructor(x,y,w,h) {
        this.body = Bodies.rectangle(x, y, w, h);
        Composite.add(engine.world, this.body);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }


    show() {
        let pos = this.body.position;
        console.log(this.body);
        fill(255);
        rect(pos.x,pos.y,this.w,this.h);
    }

}