
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone, ground, boy, boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var rope, stone;
var world, engine;

function preload(){
  boyImg = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1230, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1000,100,30);
	mango2 = new Mango(900,200,30);
	mango3 = new Mango(950,140,30);
	mango4= new Mango(1100,200,30);
  mango5= new Mango(1200,200,30);
	mango6= new Mango(1100,100,30);
	mango7= new Mango(1000,200,30);

	boy = createSprite(240,500,10,10);
  boy.addImage(boyImg);
  boy.scale = 0.16;

	stone = new Stone(160,420,15);
	rope = new Chain (stone.body, {x : 160, y : 420});

	tree = new Tree(1000,580);
	ground = new Ground(width/2,600,width,80);
	
	Engine.run(engine);

  
}

function draw() {
	//Engine.update(engine);	
  background("lightblue");

  textSize(25);
  fill("lime");
  stroke("black");
  strokeWeight(4);
  text("Press SPACE to play again :D",30,40);
  ground.display();
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  rope.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
}
  
  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:160, y:420});
      rope.attach(stone.body);
    }
  }
  
    
  