

let ground;
let tri1;


function setup() {
  createCanvas(1700 , 1200);
  ground = new Grounded(-10, height-50, width + 20, 60);
  tri1 = new Triang(200,200,300,300,100,400);
  
}

function draw() {
  background(222);
  ground.show();
  tri1.show();
}

