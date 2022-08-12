var space
var spaceship
var alien
var alien2
var alien3
var spaceimg
var spaceshipimg
var alienimg
var alienimg2
var alienimg3

function preload(){
  spaceimg = loadImage ("space.jpg")
  spaceshipimg = loadImage ("spaceship.png")
  alienimg = loadImage ("alien.png")
  alienimg2 = loadImage ("alien2.png")
  alienimg3 = loadImage ("alien3.png")
}


function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 350, 50, 50);
  alien = createSprite(400, 130, 50, 50);
  alien2 = createSprite(150, 130, 50, 50);
  alien3 = createSprite(650, 130, 50, 50);

  spaceship.addImage(spaceshipimg)
  alien.addImage(alienimg)
  alien2.addImage(alienimg2)
  alien3.addImage(alienimg3)

  spaceship.scale = 0.27
  alien.scale = 0.7
  alien2.scale = 0.7
  alien3.scale = 0.7
}

function draw() {
  background(spaceimg);  
  drawSprites();
}