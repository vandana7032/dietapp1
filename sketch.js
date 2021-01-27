var women,men;
var gameState=PLAY;
var PLAY=2;
var SERVE=1;
var balancedDietImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;
function preload(){
  balancedDietImg=loadImage("balanced diet.jpg");
}
function setup() {
  createCanvas(1400,1000);
  women=createSprite(700, 400, 300, 50);
  women.shapeColor="pink";

  men=createSprite(700,490,300,50);
  men.shapeColor="pink";
 
  //column1
  block1=createSprite(110,100,200,50);
  block1.shapeColor="pink";
  block1.visible=false;

  block2=createSprite(400,100,200,50);
  block2.shapeColor="pink";
  block2.visible=false;

  block3=createSprite(700,100,200,50);
  block3.shapeColor="pink";
  block3.visible=false;

  block4=createSprite(1000,100,200,50);
  block4.shapeColor="pink";
  block4.visible=false;

  block5=createSprite(1290,100,200,50);
  block5.shapeColor="pink";
  block5.visible=false;

  //column2
  block6=createSprite(110,300,200,50);
  block6.shapeColor="pink";
  block6.visible=false;

  block7=createSprite(400,300,200,50);
  block7.shapeColor="pink";
  block7.visible=false;

  block8=createSprite(700,300,200,50);
  block8.shapeColor="pink";
  block8.visible=false;

  block9=createSprite(1000,300,200,50);
  block9.shapeColor="pink";
  block9.visible=false;

  block10=createSprite(1290,300,200,50);
  block10.shapeColor="pink";
  block10.visible=false;

  //column3
  block11=createSprite(110,500,200,50);
  block11.shapeColor="pink";
  block11.visible=false;

  block12=createSprite(400,500,200,50);
  block12.shapeColor="pink";
  block12.visible=false;

  block13=createSprite(700,500,200,50);
  block13.shapeColor="pink";
  block13.visible=false;

  block14=createSprite(1000,500,200,50);
  block14.shapeColor="pink";
  block14.visible=false;

  block15=createSprite(1290,500,200,50);
  block15.shapeColor="pink";
  block15.visible=false;

  //column4
  block16=createSprite(110,700,200,50);
  block16.shapeColor="pink";
  block16.visible=false;

  block17=createSprite(400,700,200,50);
  block17.shapeColor="pink";
  block17.visible=false;

  block18=createSprite(700,700,200,50);
  block18.shapeColor="pink";
  block18.visible=false;

  block19=createSprite(1000,700,200,50);
  block19.shapeColor="pink";
  block19.visible=false;

  block20=createSprite(1290,700,200,50);
  block20.shapeColor="pink";
  block20.visible=false;

  //column2
  block21=createSprite(110,900,200,50);
  block21.shapeColor="pink";
  block21.visible =false;

  block22=createSprite(400,900,200,50);
  block22.shapeColor="pink";
  block22.visible =false;

}

 function draw() {
 background(balancedDietImg);

 if(keyDown("w")){
  gameState=SERVE;
 }
 if(keyDown("m")){
 gameState=PLAY 
 }

 if(gameState === SERVE){

  fill("red");
  text("5'1'125-130",110,100); 

    block1.visible = true;
    block2.visible = true;
    block3.visible = true;
    block4.visible = true;
    block5.visible = true;
    block6.visible = true;
    block7.visible = true;
    block8.visible = true;
    block9.visible = true;
    block10.visible = true;
    block11.visible = true;
    block12.visible = true;
    block13.visible = true;
    block14.visible = true;
    block15.visible = true;
    block16.visible = true;
    block17.visible = true;
    block18.visible = true;
    block19.visible = true;
    block20.visible = true;
    block21.visible = true;
    block22.visible = true;

    women.visible=false;
    men.visible=false;
  }

  if(gameState === PLAY){ 
  
      block1.visible = true;
      block2.visible = true;
      block3.visible = true;
      block4.visible = true;
      block5.visible = true;
      block6.visible = true;
      block7.visible = true;
      block8.visible = true;
      block9.visible = true;
      block10.visible = true;
      block11.visible = true;
      block12.visible = true;
      block13.visible = true;
      block14.visible = true;
      block15.visible = true;
      block16.visible = true;
      block17.visible = true;
      block18.visible = true;
      block19.visible = true;
      block20.visible = true;
      block21.visible = true;
  
      women.visible=false;
      men.visible=false;
  }
  drawSprites();

  fill("blue");
  stroke("blue")
  textSize(39);
  text("Hi!",700,150);
  text("select your gender",600,200);
  textSize(25);
  fill("red");
  stroke("red");
  text("Women",650,400);
  text("Men",650,490);

  text("press w if women",650,420);
  text("press m if men",650,510);
}

  
