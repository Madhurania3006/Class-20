var fixedRect, movingRect,

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColour = "blue";
  movingRect = createSprite(600,300,60,30);
  movingRect.shapeColour ="blue";
}

function draw() {
  background(0,0,0);  
  drawSprites();
}