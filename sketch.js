
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left,right;


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (width/2,670,width,10);
    left = new Ground (1100,600,10,150);
	right = new Ground (1350,600,10,150);
    var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball=Bodies.circle(100,100,10,ball_options);
	World.add(world,ball);
	Engine.run(engine);

	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.show();
  left.show();
  right.show();
  fill("white");
  ellipse(ball.position.x,ball.position.y,10);
 
  drawSprites();
}

function keyPressed(){
	
	if (keyCode === UP_ARROW){
	
	Matter.Body.applyForce(ball,ball.position,{x:22,y:-22});

	}

}


