var surfer, path, running_surfer, pathImg
var leftBoundary, rightBoundary
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  running_surfer = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  surfer = createSprite(200, 350, 30, 30);
  surfer.addAnimation("runningSurfer", running_surfer)
  surfer.scale = 0.06

  
  leftBoundary = createSprite(100, 200, 10, 400);
  rightBoundary = createSprite(300, 200, 10, 400);
  leftBoundary.visible=false
  rightBoundary.visible=false
}

function draw() {
  background(0);

surfer.x=World.mouseX

if(path.y > 400){
  path.y = height/2;
}

surfer.collide(leftBoundary);
surfer.collide(rightBoundary);

drawSprites();
}
