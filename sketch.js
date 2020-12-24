var tower, tower_Img;
var door, door_img, doorGroup;
var ghost, ghost_j , ghost_s;
var climber, climber_img , climberGroup

function preload(){
tower_Img = loadImage("tower.png");
door_img = loadImage("door.png");
climber_img = loadImage("climber.png");
ghost_j = loadImage("ghost-jumping.png");
ghost_s = loadImage("ghost-standing.png");


}


function setup(){
createCanvas(600, 600);
  
tower = createSprite(300, 300);
tower.addImage(tower_Img);
tower.scale = 0.7;
tower.velocityY = 2;
  
ghost = createSprite(300, 400);
ghost.addImage(ghost_s);
ghost.scale = 0.3;
  
doorGroup = new Group();
climberGroup = new Group();
}



function draw(){
background("black");
console.log(tower.y); 
  
if(keyDown("space")){
ghost.velocityY = -15;
}
if(tower.y> 400){
tower.y = 300;
}
  
ghost.velocityY = ghost.velocityY+0.5;
  
doors();
  
  
drawSprites();
}

function doors(){
if(frameCount % 200 === 0){
door = createSprite(200,-100);
door.x = Math.round(random(200,300));
door.addImage(door_img);
door.velocityY = 2;
  
climber = createSprite(door.x , -40);
climber.addImage(climber_img);
climber.velocityY = 2;
  
climberGroup.add(climber);
doorGroup.add(door);
}  
}