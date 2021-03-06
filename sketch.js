const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball;
var engine,world;
var ground;
function setup(){
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic: true
  }


  ground=Bodies.rectangle(200,380,350,20,option);
  World.add(world,ground);
  var baall={
    restitution:1.0
  }
 ball=Bodies.circle(200,20,20,baall);
 World.add(world,ball);
  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y);



}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,350,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  
  drawSprites();
}
