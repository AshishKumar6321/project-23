 var fairy1,star1,starBody,sound;

  function preload()
{
   //preload the images here
   fairy1=loadAnimation("images/fairy1.png");
  sound=loadAnimation("sound/joyMusic.mp3");
  starBody=loadAnimation("images/star.png");
   star1=loadAnimation("starnight.png");
}

function setup() {
  createCanvas(800, 750);

  starBody=createSprite(800,750);
  starBody.addImage("images/star.png");

  fairy1=createSprite(300,350,50,50);
  fairy1.addImage("images/fairy1.png");

  star1=createSprite(750,650,20,20);
  star1.addImage("starnight.png")

  }


function draw() {
  background("0");

if(keyDown(LEFT_ARROW)){
  fairy1.y=2;
}
  if(keyDown(RIGHT_ARROW)){
    fairy1.x=2;
  }
  if(keyDown(DOWN_ARROW)){
    star1.x=starBody.position.x;
    star1.y=starBody.position.y;

    sound.play();
  }

    if(starBody.position.y>476){
      starBody.y=0;
  }

  

drawsprites();
}
