var shooter, shooterImg
var space, spaceImg
var b1,b2
var ship1, ship2, ship3, ship4, ship5, ship6, ship7, ship8, ship9, ship10, ship11, ship12, ship13, ship14, ship15, ship16, ship17, ship18, ship19, ship20, ship21, ship22,   
    ship23, ship24, ship25, ship26, ship27, ship28, ship29, ship30, ship31, ship32, ship33, shipImg
function preload() {
  spaceImg=loadImage("01-33126-marsatmo2.jpg")
  shipImg=loadImage("Y Spaceship.png")
  shooterImg=loadImage("X Spaceship.png")
  jetImg=loadImage("spacejet.png")
}

function setup() {
  createCanvas(1920,969);
//(960,469)
  space=createSprite(960,469,10,10)
  space.addImage("background", spaceImg)
  space.scale=3

  b1=createSprite(1870,469,10,937)
  b1.visible=false

  b2=createSprite(50,469,10,937)
  b2.visible=false

  shooter=createSprite(960,850,20,20)
  shooter.addImage(shooterImg)
  shooter.scale=0.15
  shooter.shapeColor="blue"

  ship1=createSprite(160,100,20,20)
  ship1.addImage(shipImg)
  ship1.scale=0.15


  ship2=createSprite(320,100,20,20)
  ship2.addImage(shipImg)
  ship2.scale=0.15

  ship3=createSprite(480,100,20,20)
  ship3.addImage(shipImg)
  ship3.scale=0.15

  ship4=createSprite(640,100,20,20)
  ship4.addImage(shipImg)
  ship4.scale=0.15

  ship6=createSprite(800,100,20,20)
  ship6.addImage(shipImg)
  ship6.scale=0.15

  ship7=createSprite(960,100,20,20)
  ship7.addImage(shipImg)
  ship7.scale=0.15

  ship8=createSprite(1120,100,20,20)
  ship8.addImage(shipImg)
  ship8.scale=0.15

  ship9=createSprite(1280,100,20,20)
  ship9.addImage(shipImg)
  ship9.scale=0.15

  ship10=createSprite(1440,100,20,20)
  ship10.addImage(shipImg)
  ship10.scale=0.15

  ship5=createSprite(1620,100,20,20)
  ship5.addImage(shipImg)
  ship5.scale=0.15

  ship31=createSprite(1780,100,20,20)
  ship31.addImage(shipImg)
  ship31.scale=0.15

  ship32=createSprite(1780,200,20,20)
 
  ship32.scale=0.15

  ship33=createSprite(1780,300,20,20)
  ship33.addImage(shipImg)
  ship33.scale=0.15

  ship11=createSprite(160,200,20,20)
  ship11.addImage(shipImg)
  ship11.scale=0.15

  ship12=createSprite(320,200,20,20)
  ship12.addImage(shipImg)
  ship12.scale=0.15

  ship13=createSprite(480,200,20,20)
  ship13.addImage(shipImg)
  ship13.scale=0.15

  ship14=createSprite(650,200,20,20)
  ship14.addImage(shipImg)
  ship14.scale=0.15

  ship15=createSprite(800,200,20,20)
  ship15.addImage(shipImg)
  ship15.scale=0.15

  ship16=createSprite(960,200,20,20)
  ship16.addImage(shipImg)
  ship16.scale=0.15  

  ship17=createSprite(1120,200,20,20)
  ship17.addImage(shipImg)
  ship17.scale=0.15

  ship18=createSprite(1280,200,20,20)
  ship18.addImage(shipImg)
  ship18.scale=0.15

  ship19=createSprite(1440,200,20,20)
  ship19.addImage(shipImg)
  ship19.scale=0.15

  ship20=createSprite(1620,200,20,20)
  ship20.addImage(shipImg)
  ship20.scale=0.15

  ship21=createSprite(160,300,20,20)
  ship21.addImage(shipImg)
  ship21.scale=0.15

  ship22=createSprite(320,300,20,20)
  ship22.addImage(shipImg)
  ship22.scale=0.15

  ship23=createSprite(480,300,20,20)
  ship23.addImage(shipImg)
  ship23.scale=0.15

  ship24=createSprite(650,300,20,20)
  ship24.addImage(shipImg)
  ship24.scale=0.15

  ship25=createSprite(800,300,20,20)
  ship25.addImage(shipImg)
  ship25.scale=0.15

  ship26=createSprite(960,300,20,20)
  ship26.addImage(shipImg)
  ship26.scale=0.15  

  ship27=createSprite(1120,300,20,20)
  ship27.addImage(shipImg)
  ship27.scale=0.15

  ship28=createSprite(1280,300,20,20)
  ship28.addImage(shipImg)
  ship28.scale=0.15

  ship29=createSprite(1440,300,20,20)
  ship29.addImage(shipImg)
  ship29.scale=0.15

  ship30=createSprite(1620,300,20,20)
  ship30.addImage(shipImg)
  ship30.scale=0.15

  ship1.velocityY=0.1
  ship2.velocityY=0.1
  ship3.velocityY=0.1
  ship4.velocityY=0.1
  ship5.velocityY=0.1
  ship6.velocityY=0.1
  ship7.velocityY=0.1
  ship8.velocityY=0.1
  ship9.velocityY=0.1
  ship10.velocityY=0.1
  ship11.velocityY=0.1
  ship12.velocityY=0.1
  ship13.velocityY=0.1
  ship14.velocityY=0.1
  ship15.velocityY=0.1
  ship16.velocityY=0.1
  ship17.velocityY=0.1
  ship18.velocityY=0.1
  ship19.velocityY=0.1
  ship20.velocityY=0.1
  ship21.velocityY=0.1
  ship22.velocityY=0.1
  ship23.velocityY=0.1
  ship24.velocityY=0.1
  ship25.velocityY=0.1
  ship26.velocityY=0.1
  ship27.velocityY=0.1
  ship28.velocityY=0.1
  ship29.velocityY=0.1
  ship30.velocityY=0.1
  ship31.velocityY=0.1
  ship32.velocityY=0.1
  ship33.velocityY=0.1


  laserGroup = createGroup()
  //shipGroup = createGroup()
}
function createLaser(){
  var laser=createSprite(960,720,1,20)
     laser.shapeColor="red"
     laser.velocityY=-30
     laser.x=shooter.x
     laser.lifetime=180
     laserGroup.add(laser)
    
}

function draw() {
  background(0);  

  if (keyDown("right")){
    shooter.x=shooter.x+4
  }
  if (keyDown("left")){
    shooter.x=shooter.x-4
  }
  if (keyDown("space")){
    createLaser()
  }

  if(laserGroup.isTouching("ship1")){
    ship1.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship2")){
    shi2.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship3")){
    ship3.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship4")){
    ship4.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship5")){
    ship5.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship6")){
    ship6.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship7")){
    ship7.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship8")){
    ship8.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship9")){
    ship9.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship10")){
    ship10.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship11")){
    ship11.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship12")){
    ship12.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship13")){
    ship13.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship14")){
    ship14.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship15")){
    ship15.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship16")){
    ship16.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship17")){
    ship17.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship18")){
    ship18.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship19")){
    ship19.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship20")){
    ship20.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship21")){
    ship21.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship22")){
    ship22.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship23")){
    ship23.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship24")){
    ship24.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship25")){
    ship25.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship26")){
    ship26.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship27")){
    ship27.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship28")){
    ship28.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship29")){
    ship29.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship30")){
    ship30.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship31")){
    ship31.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship32")){
    ship32.destroy()
    laserGroup.destroyEach()
  }
  if(laserGroup.isTouching("ship33")){
    ship33.destroy()
    laserGroup.destroyEach()
  }


 
  shooter.bounceOff(b1)
  shooter.bounceOff(b2)

  
  
  drawSprites()
}

   
