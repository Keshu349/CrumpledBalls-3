var paper
var log1
var log2
var log3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var options={
	'isStatic':false,
	'resitution':0.3,
	'friction':0.5,
	'density':1.2
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject= Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, paperObject);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  log1 = createSprite (600,670,10,70);
  log2 = createSprite (650,695,100,10);
  log3 = createSprite (700,670,10,70);

  ellipseMode(CENTER)
  paper = createSprite (300,695,30);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

