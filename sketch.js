const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var mellon;
var link;
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope = new Rope(20,{x:250,y:30})
  mellonOptions={
  density:0.000001
 

  }
  link = new Link(rope,mellon)
  mellon = Bodies.circle(300,300,15,mellonOptions)
  Composite.add(rope.body,mellon)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  

 rope.show()
 ellipse(mellon.position.x,mellon.position.y,15,15)
   
}
