
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		dencity: 1.2
	}
	engine = Engine.create();
	world = engine.world;
	groundObj = new Ground(width/2,670,width,20);
    leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1100,600,20,120)

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball)


	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.show();
  rightSide.show();
  leftSide.show();


 Engine.update(engine);
}

function KeyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.05})

	}

}

