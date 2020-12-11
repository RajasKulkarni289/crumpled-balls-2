var ground,gObj,pObj,dObj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload(){
dobj=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	ball=new Ball(200,100,30);
	
	groundBody=Bodies.rectangle(600,650,1200,5,{isStatic:true});
	World.add(world,groundBody);
	
	ground=createSprite(600,650,1200,5);
	bin=createSprite(900,560,10,10);
	bin.addImage(dobj);
	bin.scale=0.5
	box1=new Box(850,585,10,130);
	box2=new Box(900,645,100,10);
	box3=new Box(950,585,10,130);
	
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  ground.x=groundBody.position.x;
  ground.y=groundBody.position.y;
 
  
 
  rect(groundBody.position.x,groundBody.position.y,1200,5)	
 
  box1.display();
  box2.display();
  box3.display();
drawSprites();
 ball.display();
 }

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-80})
	}
}

