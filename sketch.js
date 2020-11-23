const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var paper,ground;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bin1 = new Dustbin(750,550,10,200);
	bin2 = new Dustbin(655,645,200,10);
	bin3 = new Dustbin(552,550,10,200);
	
	paper = new Paper(200,200,20,20);

	ground = new Ground(100,680,2900,10)
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
	}
}

