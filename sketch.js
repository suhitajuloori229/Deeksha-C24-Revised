
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(50,450,20);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
	//ADJUST THESE SPRITES so that the paper falls into the bin
	
	box1= createSprite(600,640,220,20);
	box1.shapeColor="red";

	box2=createSprite(500,570,20,140);
	box2.shapeColor="red";

	box3=createSprite(700,570,20,140);
	box3.shapeColor="red";

	Engine.run(engine);
	//Render.run(render);

	

}


function draw() {
	rectMode(CENTER);
	background(0);
   
	paperObject.display();
	groundObject.display();
	box1.display();
	box2.display();
	box3.display();
   
  }
  
  function keyPressed() {
		if (keyCode === UP_ARROW) {
  
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	  
		}
  }



