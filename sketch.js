var sea,ship,seaImg,shipImg;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-1.png");
  seaImg=loadImage("sea.png")

}


function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-3;
  sea.scale=0.3

  ship=createSprite(150,200,30,30);
  ship.addAnimation("ship_moving",shipImg);
  ship.scale=0.2;

}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/8
  }
 drawSprites();
}