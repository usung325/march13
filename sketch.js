var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;


let ground;
let tri1;
let rect1;


function setup() {
  createCanvas(1700 , 1200);

  let engine = Matter.Engine.create();
  let world = engine.world;

  ground = new Grounded(width/2, height-50, width, 100);
  tri1 = new Triang(200,200,300,300,100,400);
  rect1 = new Rectang(200,200,50,50);
}

function draw() {
  background(222);
  Matter.Engine.update(engine);

  ground.show();
  tri1.show();
  rect1.show();
}

