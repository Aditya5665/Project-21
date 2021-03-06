var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	//Create Bodies here

	
	var walls_options={
	isStatic:true,
	restitution:0,
	}
	ground = Bodies.rectangle(0, 380, 800, 10, walls_options);
	World.add(world,ground);
	leftWall = Bodies.rectangle(500,330,10,50, walls_options);
	World.add(world, leftWall);
	rightWall = Bodies.rectangle(700,330,10,50, walls_options);
	World.add(world, rightWall);
	ground2 = Bodies.rectangle(0, 390, 800, 10, walls_options);
	World.add(world,ground2);
	var ball_options={
		isStatic:false,
		restitution:0.0002,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(100,100,15,ball_options);
	World.add(world, ball);
	console.log(ground);
	Engine.run(engine);
	
}


function draw() {
  background(0);
  keyPressed();
  fill("yellow");
  rect(ground.position.x, ground.position.y, 800, 10,)
  fill("red"); 
  rect(leftWall.position.x, leftWall.position.y, 10,50)
  rect(rightWall.position.x, rightWall.position.y, 10,50)
  fill("red");
  rect(ground2.position.x, ground2.position.y, 800, 10,)
  fill("blue");
  ellipse(ball.position.x, ball.position.y, 30)
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball, { x:0 ,y:0}, {x:0.51 , y: -0.4} )

	}
}

