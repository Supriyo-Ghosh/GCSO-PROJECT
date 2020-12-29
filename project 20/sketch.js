var car;
var wall;

function setup() {
  createCanvas(400,400);

  car = createSprite(50,200,20,20);
  car.shapeColor = 'blue';
  

  wall = createSprite (350, 200, 20, 60);
  wall.shapeColor = 'blue';
 

}

function draw() {
  background(0);

  car.x = World.mouseX;
  car.y = World.mouseY;
  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
  car.shapeColor = "yellow";
  wall.shapeColor = "yellow";
}
else {
  car.shapeColor = "blue";
  wall.shapeColor = "blue";
}
  drawSprites();
}