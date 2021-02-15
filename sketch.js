
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, dustbin
var world;
var paper;
function preload (){
	dustbin=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	paper = new Paper(250,200,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display()
 // dustbin.display()

}

function keyPressed(){
	if (keyCode === UP_ARROW){
  
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-70})
	}
  }
  