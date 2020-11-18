
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	engine = Engine.create();
	world = engine.world;
	var options={
		restitution:0.3,
		friction:0.5,
		density:1,

	}
ball=Bodies.circle(100,50,20,options);
World.add(world,ball);
	//Create ground here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 bottomBody=Bodies.rectangle(width/2+220,650,150,20,{isStatic:true});
	 leftBody=Bodies.rectangle(width/2+150,600,20,150,{isStatic:true});
	 rightBody=Bodies.rectangle(width/2+300,600,20,150,{isStatic:true});
	Engine.run(engine);
	World.add(world,bottomBody);
  World.add(world,leftBody);
  World.add(world,rightBody);
}
  



function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
  fill ("red");
  rect(bottomBody.position.x,bottomBody.position.y,150,20)
  fill ("red");
  rect(leftBody.position.x,leftBody.position.y,20,150);
  fill("red")
  rect(rightBody.position.x,rightBody.position.y,20,150);
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW);
Matter.Body.applyForce(ball,ball.position,{x:85,y:-40});
}



