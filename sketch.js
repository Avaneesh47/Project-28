const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var world,engine;
var ball,platform1,platform2,platform3,platform4;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;

var block10,block11,block12,block13,block14;
var block15,block16,block17,block18;

var block19,block20,block21,block22,block23;
var block24,block25,block26,block27;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //creating the ball
  ball = new Ball(400,200,50);

  //creating platforms
  platform1 = new Platform(120,150,200,10);
  platform2 = new Platform(655,290,200,10);
  platform3 = new Platform(150,350,200,10);

  //creating blocks for first platform
  block1 = new Block(70,320);
  block2 = new Block(110,320);
  block3 = new Block(150,320);
  block4 = new Block(190,320);
  block5 = new Block(230,320);

  block6 = new Block(90,300);
  block7 = new Block(130,300);
  block8 = new Block(170,300);
  block9 = new Block(210,300);

  //creating blocks for second platform
  block10 = new Block(575,260);
  block11 = new Block(615,260);
  block12 = new Block(655,260);
  block13 = new Block(695,260);
  block14 = new Block(735,260);

  block15 = new Block(595,240);
  block16 = new Block(635,240);
  block17 = new Block(675,240);
  block18 = new Block(715,240);

   //creating blocks for third platform
   block19 = new Block(40,120);
   block20 = new Block(80,120);
   block21 = new Block(120,120);
   block22 = new Block(160,120);
   block23 = new Block(200,120);
 
   block24 = new Block(60,100);
   block25 = new Block(100,100);
   block26 = new Block(140,100);
   block27 = new Block(180,100);
}

function draw() {
  background("black");
  Engine.update(engine);

  fill("white");
  text("X:"+mouseX,50,50);
  text("Y:"+mouseY,50,60);

  ball.display();

  platform1.display();
  platform2.display();
  platform3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
}