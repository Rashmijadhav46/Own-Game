const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;

var canvas;
var philip;
var wolves;
var traps;
var diamonds;

function setup()
{
   canvas=createCanvas(800,600);  
   engine=Engine.create();
   world=engine.world;
   ground=new Base(100,550,1800,1200);
   philip=new Player(200,400,800,200);
   wolves=new Non(500,30);
   traps=new Traps(400,200);

}

function draw()
{
  //ground.scroll();
  ground.display();
  philip.display();
  //wolves.display();
  //traps.display();
}