
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperball;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperball = new Paper(200,450,50);
	var render = Render.create( {
	 element: document.body,
	 engine: engine,
	 options: { width: 1600, height: 700, wireframes: false } 
	}
	); 
	Engine.run(engine); Render.run(render);
  
}


function draw() {
  background(230);
  rectMode(CENTER);
  groundObject.display();
  dustbinObj.display();
  paperball.display();
}

function keyPressed(){

if(keyCode == UP_ARROW){
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:45,y:-55});

}
}

