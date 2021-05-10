
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var bobDiameter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine=Engine.create();
	world=engine.world;
	bobObject1=new Bob(80,220,30);
	bobObject2=new Bob(140,220,30);
	bobObject3= new Bob(200,220,30);
	bobObject4= new Bob(260,220,30);
	bobObject5=new Bob(320,220,30);
	roof=new Roof(200,20,400,40);

	rope1=new Rope(bobObject1.body,roof.body,-120,0);
	rope2=new Rope(bobObject2.body,roof.body,-60,0);
	rope3=new Rope(bobObject3.body, roof.body,0,0);
	rope4=new Rope(bobObject4.body, roof.body, 60,0);
	rope5= new Rope(bobObject5.body,roof.body, 120,0);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:-45});
	}
}