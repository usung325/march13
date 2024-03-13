let Engine;
let Render;
let Runner;
let Bodies;
let Composite;


Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

let boxA = [];
let engine;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1700 , 1200);

  for(i=0; i < 50 ; i++){
    boxA.push(Bodies.rectangle(random(1700), 200 , 20, 20));
  }
  var ground = Bodies.rectangle(400, 1100, 400, 1100, { isStatic: true });

  Engine.run(engine);
  console.log(boxA);

  for(i=0; i < boxA.length; i++){
    Composite.add(engine.world, [boxA[i], ground]);
  }

  
}

function draw() {
  background(222);
  for(i=0; i < boxA.length; i++){
    rect(boxA[i].position.x, boxA[i].position.y,50,50);
  }
}

