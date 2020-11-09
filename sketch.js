
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground 
var obstaclegroup, bananagroup

function preload(){
  monkeyImage = loadImage("banana.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 200) 
monkey=createSprite(50,160,20,50)
    monkey.addAnimation("moving",monkey_running)
monkey.scale=0.10
  ground=createSprite(100,200,100000,30)
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  
  
  obstaclegroup = new Group();
  bananagroup=new Group();

}

function draw() {
   background("white")

  var survivalTime=0;
  
  stroke("black")
  textSize(20);
    fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50);

  
  if (keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -13;}
  
    monkey.velocityY = monkey.velocityY + 1

    monkey.collide(ground);

  spawnBananas()
    spawnObstacles()
  
 drawSprites()
}

function spawnObstacles() {
  if (frameCount % 100 == 0) {
    obstacle = createSprite(300,170,5,5 );
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.velocityX = -4
    obstacle.depth = monkey.depth
    obstacle.depth = monkey.depth + 1
    obstacle.lifetime = 150
  obstacle.scale=0.15

    }
}

function spawnBananas() {
  if (frameCount % 100 == 0) {
    var bananaY = random(100, 50); 
    banana = createSprite(550, bananaY);
    banana.addImage("banana", bananaImage);
    banana.velocityX = -4
    banana.depth = monkey.depth
    banana.depth = monkey.depth + 1
    banana.lifetime = 150
  banana.scale=0.10
  }
}