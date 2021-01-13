
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    db = new Dustbin(525,600,150,70);
    paper = new Paper(200,100,60,60);
    ground = new Ground(400,700,800,50);
    D1 = new Ground(600,675,150,20);
    D2 = new Ground(525,650,20,75);
    D3 = new Ground(675,650,20,75);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  db.display();
  D1.display();
  D2.display();
  D3.display();
  drawSprites();
 
}

function keyPressed(){

    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60 , y: -60});
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60 , y: -60});
    }

  }    
