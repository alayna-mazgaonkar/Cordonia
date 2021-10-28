
var gamestate=71;
var bg,distance=10000,coins=0;
var t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0;
var a1=5,a2=0,k=0,f=0,b1=0,b2=0,q=0,g=0,e=0,s=0,v=0,d=0
var mc,npc1,npc2,npc3;

function preload(){
 img1=loadImage("OIP (4).jpg")  
  img2=loadImage("OIP (3).jpg")
  img3=loadImage("59dc813519f7efce13c9594be783765d--fantasy-town-medieval-fantasy.jpg")
  img4=loadImage("medievaltown_backalley.jpg")
  img5=loadImage("204170.jpg")
  img6=loadImage("ab67706c0000bebbd38e235add09f9deeef4477d.jpg")
  img7=loadImage("medievaltown_backalley.jpg")
  img8=loadImage("Port.jpg")
  img9=loadImage("_D.jpg")
  img10=loadImage("d92zt6c-b8b421c6-af38-4f2e-b191-9d81c752f28e.jpg")
  img11=loadImage("medieval-town.jpg")
  img12=loadImage("79f9ff299dfe8d71952f6871a25165d0.jpg")
  img13=loadImage("65f4e8d32445d875443add1bc601ed87.png")
  img14=loadImage("f9f62895543317faf30a44bbe6e157e3.jpg")
  img15=loadImage("Throne-17.jpg")
  img16=loadImage("images.jpg")
  
  mcimg=loadImage("c791f4e74e64ffde29cf58c8d51a8526.png")
  npc1img=loadImage("84229-sims-and-medieval-figurine-design-costume-nobles-thumb.png")
  npc2img=loadImage("813f1a5dc47d1d35f86be69449c16378.png")
  npc3img=loadImage("bfc-nobleman_230c3aecea.png")
  npc4img=loadImage("84228-sims-and-medieval-armour-pirates-nobles-outerwear.png")
  npc5img=loadImage("84229-sims-and-medieval-figurine-design-costume-nobles-thumb.png")
  npc6img=loadImage("25110-9-medieval-transparent-picture.png")
  npc7img=loadImage("Middle-Ages-Noble-Knight-Man-Nobleman-Bard-3276861.png")
  npc8img=loadImage("30bb34253027ee02e0e101587f3fd174.png")
  npc9img=loadImage("36bfb65cf5983564540d1fbcc2250494.png")
  npc10img=loadImage("979-9799389_human-male-sorcerer-dnd-male-sorcerer-art.png")
  npc11img=loadImage("6825557dd8c6864e7c5f4ba11988d059.png")
  npc12img=loadImage("a91d13bb233021d39041cab6afbd8fbf.png")
  npc13img=loadImage("ca79b31212daba954e1c4070ca2bbd8d.png")
  npc14img=loadImage("6b66628b2b2d65428137218a4cba2ece.png")
  npc15img=loadImage("15ee53dc94323f650ff2dde354fa8799.png")
  npc16img=loadImage("aa0face0b228dd5b32da242bf45c0d4d.png")
  npc17img=loadImage("bfc-nobleman_230c3aecea.png")
  npc18img=loadImage("a4de0490f550ed08181151689f9bf967.png")
  npc19img=loadImage("110f99ddead71907ab31184de4a086f8.png")
  npc20img=loadImage("3158a5f9da03fd9f7550a0703c49f7d3.png")
  fishimg=loadImage("Bluegilll_DuaneRavenArt.png")
  diamond=loadImage("d.png")
  bowimg=loadImage("advanced_archery_recurve_target_bow.png")
  arrimg=loadImage("arrow_bow_PNG37.png")
  scrollimg=loadImage("unnamed.png")
  sealimg=loadImage("61-618236_wax-seal-stamp-png-letters-transparent-background-wax.png")
  simg=loadImage("6b00bb8d082e5c4bbeb114c61f43c162.png")
  leftimg=loadImage("less-icon-10.png")
  rightimg=loadImage("1200px-Less_than.svg.png")
}

function setup() {
  createCanvas(700, 500);
  
  necklace=createSprite(270,440,20,20)
  necklace.addImage("n",diamond)
  necklace.scale=0.03
  
  bg=createSprite(350,250,800,800)
 bg.addImage("bg4",img4)
  bg.addImage("bg",img1)
  bg.addImage("bg2",img2)
  bg.addImage("bg3",img3)
  bg.addImage("bg5",img5)
  bg.addImage("bg6",img6)
  bg.addImage("bg8",img8)
  bg.addImage("bg9",img9)
  bg.addImage("bg10",img10)
  bg.addImage("bg11",img11)
  bg.addImage("bg12",img12)
  bg.addImage("bg13",img13)
  bg.addImage("bg14",img14)
  bg.addImage("bg15",img15)
  bg.addImage("bg16",img16)
  bg.scale=2.8
  
  npc1=createSprite(530,330,50,250)
  npc1.addImage("mc",npc1img)
  npc1.addImage("n",npc9img)
  npc1.scale=1.6
//c1.rotation=360
  
  npc2=createSprite(300,340,50,250)
  npc2.addImage("mc",npc2img)
  npc2.scale=0.15;
  
  npc3=createSprite(100,370,50,250)
  npc3.addImage("mc",npc7img)
  npc3.scale=0.35;
  
  npc4=createSprite(600,360,50,250)
  npc4.addImage("n",npc11img)
  npc4.addImage("mc",npc8img)
  npc4.scale=0.14;
  
  npc5=createSprite(635,345,50,250)
  npc5.addImage("mc",npc13img)
  npc5.scale=0.2;
  
  npc6=createSprite(580,345,50,250)
  npc6.addImage("mc",npc10img)
  npc6.scale=0.28;
  
  npc7=createSprite(180,355,50,250)
  npc7.addImage("mc",npc14img)
  npc7.scale=0.17;
  
  npc8=createSprite(460,345,50,250)
  npc8.addImage("mc",npc15img)
  npc8.scale=0.15;
  
  npc9=createSprite(80,345,50,250)
  npc9.addImage("mc",npc12img)
  npc9.scale=0.25;
  //npc9.rotation=180
  
  npc10=createSprite(80,345,50,250)
  npc10.addImage("mc",npc6img)
  npc10.scale=0.25;
  
  npc11=createSprite(340,380,50,250) 
  npc11.addImage("mc",npc16img)
  npc11.scale=0.34;
  
  npc13=createSprite(220,375,50,250)
  npc13.addImage("mc",npc18img)
  npc13.scale=0.4;
  
  npc14=createSprite(480,365,50,250)
  npc14.addImage("mc",npc19img)
  npc14.scale=0.4;
  
   npc12=createSprite(590,345,50,250)
  npc12.addImage("mc",npc17img)
  npc12.scale=1.3
  
  npc15=createSprite(500,345,50,250)
  npc15.addImage("mc",npc20img)
  npc15.scale=1.3
  
  mc=createSprite(100,360,50,200)
  mc.addImage("mc",mcimg)
  mc.scale=0.35;
  
  op1=createSprite(250,480,200,25)
  op2=createSprite(520,480,270,25) 
  op3=createSprite(400,480,100,25) 
  op4=createSprite(100,480,100,25)
  op5=createSprite(390,480,100,25)
  op6=createSprite(160,470,100,30)
  op7=createSprite(390,470,100,30)
  op8=createSprite(300,150,100,50)
  op9=createSprite(140,470,300,30)
  op10=createSprite(540,470,300,30)
  op11=createSprite(540,300,100,200)
  op12=createSprite(140,470,300,30)
  op13=createSprite(380,430,60,20)
  op50=createSprite(350,470,100,20)
   op41=createSprite(350,400,100,20)
  door1=createSprite(80,300,50,30)
  door2=createSprite(240,380,100,30)
  door3=createSprite(500,300,100,100)
  door4=createSprite(370,300,100,100)
  door5=createSprite(200,350,100,100)
  
  p3=createSprite(390,300,70,200)
  p1=createSprite(170,300,70,200)
   p2=createSprite(290,300,70,200)
   p4=createSprite(475,260,70,200)
   p6=createSprite(600,300,70,200)
  
  f1=createSprite(500,440,20,10)
  f1.addImage("f",fishimg)
  f1.scale=0.035
  f1.velocityX=-4
  
  f2=createSprite(600,420,20,10)
  f2.addImage("f",fishimg)
  f2.scale=0.035
  f2.velocityX=-4
  
  f3=createSprite(450,400,20,10)
  f3.addImage("f",fishimg)
  f3.scale=0.035
  f3.velocityX=-3
  
  f4=createSprite(400,410,20,10)
  f4.addImage("f",fishimg)
  f4.scale=0.035
  f4.velocityX=-4
  
  f5=createSprite(550,400,20,10)
  f5.addImage("f",fishimg)
  f5.scale=0.035
  f5.velocityX=-5
  
  bow=createSprite(130,310,10,150,10)
  bow.addImage("b",bowimg)
  bow.scale=0.25
  bow.rotation=180
  arrow=createSprite(130,310,90,5)
  arrow.addImage("a",arrimg)
  arrow.scale=0.1
  
  scroll=createSprite(350,250,50,50)
  scroll.addImage("s",scrollimg)
   scroll2=createSprite(350,250,50,50)
  scroll2.addImage("s",simg)
  seal=createSprite(170,340,20,20)
seal.addImage("s",sealimg)
  
 // right=createSprite(660,250,10,10)
 // left=createSprite(40,250,10,10)
 // right.addImage("r",rightimg)
 // right.scale=0.3
 // left.addImage("l",leftimg)
 // left.scale=1
}

function draw() {
  background("black");
drawSprites()
  console.log(gamestate)
  console.log(t7)
  strokeWeight("5")
  stroke("black")
  fill("gray")
textSize(20) 
  if(gamestate!==69&&gamestate!==70&&gamestate!==71&&gamestate!==72){
text("Distance left: "+distance+"km",10,30)
text("Coins: "+coins,10,60)}
  if(mc.x<50){
   //c.x=650
  }
  
if(f2.x<400){ f2.velocityX=f2.velocityX*-1}
  if(f1.x<500){ f1.velocityX=f1.velocityX*-1}
  if(f3.x<300){ f3.velocityX=f3.velocityX*-1}
  if(f4.x<300){ f4.velocityX=f4.velocityX*-1}
  if(f5.x<300){ f5.velocityX=f5.velocityX*-1}
  
  if(f1.x>690){f1.velocityX=f1.velocityX*-1}
  if(f2.x>690){f2.velocityX=f2.velocityX*-1}
   if(f3.x>690){f3.velocityX=f3.velocityX*-1}
   if(f4.x>690){f4.velocityX=f4.velocityX*-1}
   if(f5.x>690){f5.velocityX=f5.velocityX*-1}
  
if(gamestate===40){message2()} 
  
move()
  op13.visible=false
  npc3.visible=false
  npc4.visible=false
  op1.visible=false
  op2.visible=false
  op3.visible=false
  op4.visible=false
  op5.visible=false
  op6.visible=false
  npc9.visible=false
  op7.visible=false
  npc5.visible=false
  door1.visible=false
  npc6.visible=false
 door2.visible=false
  p1.visible=false
  p2.visible=false
  p3.visible=false
  p4.visible=false
  p6.visible=false
  scroll.visible=false
  scroll2.visible=false
  npc7.visible=false
  op8.visible=false
  door3.visible=false
 door4.visible=false
door5.visible=false
  npc8.visible=false
  f1.visible=false
  f2.visible=false
  f3.visible=false
  f4.visible=false
  f5.visible=false
  bow.visible=false
  arrow.visible=false
  op9.visible=false
  op10.visible=false
  op11.visible=false
  op12.visible=false
  npc10.visible=false
  npc11.visible=false
  npc12.visible=false
  npc13.visible=false
  npc14.visible=false
  scroll.visible=false
  seal.visible=false
  op41.visible=false
  op50.visible=false
  npc15.visible=false
  
//if(keyDown("space")){gamestate=17}
  if(keyDown("v")){gamestate=36}

  bg.changeImage("bg",img1)
  bg.scale=2.8
  
if(keyDown("v")){gamestate===17}

if(gamestate===0){
bg.changeImage("bg2",img2)
bg.scale=1.8
if(mc.x<700){move()}
npc2.visible=true
npc1.visible=false
if(mc.x>700){gamestate=1}
}  
if(gamestate===1){
  if(mc.x===700){mc.x=690}
  npc1.changeImage("mc",npc1img)
bg.changeImage("bg",img1)
bg.scale=2.8;
npc2.visible=false
npc1.visible=true
if(mc.x<50){gamestate=4}
if(t1===1&&mousePressedOver(npc1)){
gamestate=10
  coins=coins+40} 
}  
if(gamestate===2){
  npc1.changeImage("mc",npc1img)
bg.changeImage("bg",img1)
bg.scale=2.8;
  bg.visible=true
  mc.visible=true
    message()
  if(mc.x<700){move()}
  npc1.changeImage("mc",npc1img)
    npc1.visible=true
    npc2.visible=false
  op41.y=430
  fill("yellow") 
    textSize(20)
    text("Okay",330,440) 
    if(mousePressedOver(op41)) {
    gamestate=1 }
  }
if(gamestate===3){
  npc1.changeImage("mc",npc1img)
    stroke("black")
    strokeWeight(3)
    fill("yellow") 
    textSize(20)
    text("Okay",330,450) 
     if(mc.x<50){
     gamestate=4}
if(mc.x===700){mc.x=690}
}
if(gamestate===4){
    bg.changeImage("bg2",img2)
    bg.scale=1.8
    npc2.visible=true
    npc1.visible=false
    move()
    if(mousePressedOver(npc2)){
     gamestate=5}
    if(mc.x>700){gamestate=1}
if(mc.x<0
  ){
     gamestate=8}
    }
 if(gamestate===5){
   bg.changeImage("bg2",img2)
   bg.scale=1.8
    fill("white") 
    stroke("black")
    strokeWeight("3")
    textSize(20)
    text("Hello there!",340,450)
   op1.width=200
   op1.x=250
   op2.x=520
   op2.width=270
   op3.width=100
   op3.x=480
    //op1.visible=true
    //op2.visible=true
   
    option1()
    if(mc.x>700){gamestate=1}
    if(mousePressedOver(op1)){gamestate=6} 
    if(mousePressedOver(op2)&&t2===0){gamestate=7} 
    if(mousePressedOver(op2)&&t2===2){gamestate=13
                                     coins=coins+40}
    if(mc.x<0
      ){gamestate=8}
    }   
if(gamestate===6){
  bg.changeImage("bg2",img2)
  bg.scale=1.8
  t1=1
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("Yes. Do you have a package for me",300,450) 
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Yes, I do.",350,485)
  op3.x=390
   op3.width=100
 // op3.visible=true
  if(mc.x<0){gamestate=8}
  op1.destroy();
  op2.destroy()
  if(mousePressedOver(op3)) {
    gamestate=4 }  
   if(mc.x>700){gamestate=1}
  }
if(gamestate===7){
  bg.changeImage("bg2",img2)
  bg.scale=1.8
  t2=1
  fill("white");stroke("black");strokeWeight("3");textSize(20)
  text("Yes, this morning i lost my necklace near the well. ",200,450)
  text("Can you find it? ",200,470)
  if(mc.x<0){gamestate=8}
  op1.depth=bg.depth-1;
  op2.depth=bg.depth-1
  if(mc.x>700){gamestate=1}
  //if(mousePressedOver(bg)){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=4 }
}
if(gamestate===9){
  t1=1
  if(mc.x>700){gamestate=1}
  if(mc.x<0){gamestate=1}
  
}    
if(gamestate===8){
bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
  npc4.changeImage("mc",npc8img)
move()  
if(mc.x>650){gamestate=4}  
  if(mousePressedOver(npc3)){gamestate=22}
    
  
if(t2===1&&mousePressedOver(necklace)){
necklace.depth=bg.depth+1  
  necklace.visible=true
gamestate=12  
}
  
if(mousePressedOver(npc4)&&t3===0){  
gamestate=14   
  t3=1
   }
if(mc.x<0){mc.x=10}  
}
  if(gamestate===22){
bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
if(mc.x>650){gamestate=4}  
  
    
    textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
if(t1===2){  
text("Are you MrGrayson?",135,485)
if(mousePressedOver(op1)){gamestate=11} }  
text("Have you heard about the Haynes family?",330,485)
if(mousePressedOver(op2)){gamestate=23}
    if(mc.x<0){mc.x=10}
  }   
if(gamestate===23){
bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
if(mc.x>650){gamestate=4}  
  
fill("white");stroke("black");strokeWeight("3");textSize(20)
  text("Yes, I heard the noblemen were jealous of the praise they were",10,440)
  text("getting, so they hired a hitman. ",100,460)

  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=8 }
    if(mc.x<0){mc.x=10}
}  
if(gamestate===10){
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("I see you have completed the task. Go talk to Mr. Grayson, ",60,440) 
  text("he will get you to your destination",200,460)
  t1=2
  //coins=30
  if(mousePressedOver(op1)){
   gamestate=1 }
  if(mc.x<50){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=1 }
}  
if(gamestate===11){
  bg.changeImage("bg3",img3)
bg.scale=1.8
   if(mc.x>650){gamestate=4}  
   npc2.visible=false
   npc1.visible=false
   npc3.visible=true
   npc4.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  
  if(coins<99){
  text("I heard you need to go to Pearl City. I dont go that far but I",100,440)
  text("can take you to the next village for 100 coins.",100,460)
  //op3.visible=true
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=8 
  }}
  if(coins>99){
   text("You've got enough coins, lets go.",100,440)
  //text("can take you to the next village for 100 coins.",100,460)
  //op3.visible=true
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=17 
  coins=coins-100
  distance=distance-5000
  } }
    if(mc.x<0){mc.x=10}
} 

if(gamestate===12){
  bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
 // op3.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
text("(take it)",360,485) 
 // necklace.visibile=true
  if(mousePressedOver(op5)){
    necklace.depth=bg.depth-1
    t2=2
    gamestate=8
  }
    if(mc.x<0){mc.x=10}
}  

  if(gamestate===13){
     if(mc.x>700){gamestate=1}
   if(mc.x<0){
     gamestate=8}
  bg.changeImage("bg2",img2)
  bg.scale=1.8
  t2=3
  fill("white");stroke("black");strokeWeight("3");textSize(20)
  text("Thank you so much.",300,450)
   // if(mousePressedOver(bg)){gamestate=4}
  }

if(gamestate===14){
 bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
 // op3.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
text("Hey, I have a riddle for you. If you answer this right I'll give you some coins.",10,440) 
  text("What does everybody have, and no one can lose.",100,460) 
fill("yellow") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
 text("A shadow",55,485) 
  text("A name",300,485)
  text("A voice",520,485)
  
//op1.visible=true
  op1.width=100
  op1.x=100
 // op2.visible=true
  op2.width=100
  op2.x=330
  //op3.visible=true
  op3.width=100
  op3.x=550
  
if(mousePressedOver(op4)){gamestate=15
                         coins=coins+40}
if(mousePressedOver(op50)||mousePressedOver(op3)) {gamestate=16
                                                 coins=coins+20} 
    if(mc.x<0){mc.x=10}
}  

if(gamestate===15){
  if(mc.x>650){gamestate=4}  
bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
 // op3.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
text("Good job here are 40 coins for you.",50,440) 
//if(mousePressedOver(bg)){gamestate=8}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=8 }
    if(mc.x<0){mc.x=10}
}
  
if(gamestate===16){
  if(mc.x>650){gamestate=4}  
bg.changeImage("bg3",img3)
bg.scale=1.8
npc2.visible=false
npc1.visible=false
  npc3.visible=true
  npc4.visible=true
move()  
 // op3.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
text("That is not correct but I pity you so here are 20 coins",10,440) 
//if(mousePressedOver(bg)){gamestate=8}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=8 }
  if(mc.x<0){mc.x=10}
}


if(gamestate===17){
  bg.changeImage("bg5",img5)
   bg.scale=0.6 
 // bg.x=350
  mc.scale=0.35
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=true
   fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(14)
  text("(enter)",60,300)
  if(mousePressedOver(door1)){gamestate=18}
  if(mousePressedOver(npc5)){gamestate=19
                            if(t5===0){coins=coins+40}}
  if(mc.x>700){gamestate=20}
  if(mc.x<0){mc.x=10}  
}

if(gamestate===18){
  if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false  
  
  if(t7===1){fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(18)
  text("(enter)",60,300)
  text("(ask for a drink)",240,150)}
  
  if(mousePressedOver(op8)&&t7===1){
    gamestate=33
  }
  
  if(mousePressedOver(p2)||
     mousePressedOver(p4)||mousePressedOver(p6)){gamestate=25}
 if (mousePressedOver(p1)){gamestate=28}
  if(mousePressedOver(p3)){gamestate=31}
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}
  
  if(gamestate===25){
   if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
   textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
if(t6===1){  
text("(check for keys)",105,485)
if(mousePressedOver(op6)){gamestate=26} }
text("Did you hear about the Haynes family?",355,485) 
    if(mousePressedOver(op2)&&t2===0){gamestate=27}   
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}  
  }
  
  if(gamestate===28){
   if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
   textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
if(t6===1){  
text("(check for keys)",105,485)
if(mousePressedOver(op6)){gamestate=26} }
text("Did you hear about the Haynes family?",355,485) 
    if(mousePressedOver(op2)&&t2===0){gamestate=29}   
    //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  }
  
  if(gamestate===31){
   if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
   textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
if(t6===1){  
text("(check for keys )",105,485)
if(mousePressedOver(op6)){gamestate=30} }
text("Did you hear about the Haynes family?",355,485) 
    if(mousePressedOver(op2)){gamestate=29}    
   // if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  }
 
if(gamestate===26){
   if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("(nothing) ",360,440) 
  //if(mousePressedOver(op1)){
  // gamestate=1 }
  if(mc.x<50){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op7)){
   gamestate=18 }
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  } 
  
  if(gamestate===30){
   if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false  
  //  npc9.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("(take keys) ",360,440) 
   
  //if(mousePressedOver(op1)){
  // gamestate=1 }
  //if(mc.x<50){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op7)){
   gamestate=18
    t6=2
  }
  //  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  } 

  if(gamestate===27){
  if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("I heard he disobeyed the king so they got him assaninated",60,440) 
    
  //text("he will get you to your destination",200,460)
  //t1=2
  //coins=30
  //if(mousePressedOver(op1)){
  // gamestate=1 }
  //if(mc.x<50){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=18 }
   // if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  }
  
  if(gamestate===29){
  if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false   
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("I heard he got involved woth some local mafia",60,440) 
    
  //text("he will get you to your destination",200,460)
  //t1=2
  //coins=30
  //if(mousePressedOver(op1)){
  // gamestate=1 }
  //if(mc.x<50){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=18 }
  //  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
  }
  
if(gamestate===19){
if(mc.x<0){gamestate=17}
  bg.changeImage("bg5",img5)
  bg.scale=0.6 
  mc.scale=0.35
 t5=1
  npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=true
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
  text("Hey, you over there! I have this book I want to get signed by my favorite authors.",2,420)
   text("I'll pay you for every autograph and 40 coins for starting. ",100,440)
  text("Find Nicholas Cage and Sairose Ronan. ",200,460)
   textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
 text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=17
   // if(t1===0){
  //  coins=coins+20}
  }
  if(mc.x<0){mc.x=10}
  //if(mc.x>700){mc.x=690}
} 
 
if(gamestate===20){
if(mc.x<0){gamestate=17}
  bg.changeImage("bg4",img4)
  bg.scale=0.9
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=true
fill("white") 
  stroke("black")
  strokeWeight(2)
  textSize(18)  
text("(port)",220,380)
  if(mousePressedOver(door2)){gamestate=21}
   if(mousePressedOver(npc6)&&t6!==3){gamestate=24}
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  

if(gamestate===21){
if(mc.x>700){gamestate=20}
  bg.changeImage("bg8",img8)
  bg.scale=0.8
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=false 
npc7.visible=true
  npc15.visible=true
  npc15.scale=0.14
if(mousePressedOver(npc7)){
  gamestate=32
}
  if(mousePressedOver(npc15)&&coins<99){gamestate=76}
  if(mousePressedOver(npc15)&&coins>99){gamestate=75}
  if(mc.x<0){mc.x=10}
//  if(mc.x>700){mc.x=690}
}

if(gamestate===24){
if(mc.x<0){gamestate=17}
  bg.changeImage("bg4",img4)
  bg.scale=0.9
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=true

fill("white");stroke("black");strokeWeight("3");textSize(20)
  if(t6!==2){
  text("Hey. Someone at the tavern stole my keys if you get it",100,440)
  text("I'll pay you some coins. Check all their pockets.",140,460)
    t6=1
  }
  if(t6===2){
    text("Thankyou, I hate it when I lose my keys.",200,450)
  }
  //if(mc.x<0){gamestate=8}
  op1.depth=bg.depth-1;
  op2.depth=bg.depth-1
  //if(mc.x>700){gamestate=1}
  //if(mousePressedOver(bg)){gamestate=4}
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   gamestate=20}
if(mousePressedOver(op5)&&t6===2){
   gamestate=20
coins=coins+40
t6=3}
//  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  
  
if(gamestate===32){
  if(mc.x>700){gamestate=20}
  bg.changeImage("bg8",img8)
  bg.scale=0.8
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=false 
npc7.visible=true
fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(20)  
  if(t7>1){gamestate=77}
if(t7!==2&&   t7!==3&&t7!==4){
text("Hello there. Can you get me a beer from the tavern, I'll pay you.",10,460)
t7=1
  fill("yellow")
 text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=21}  
 npc15.visible=true
}}
 
if(gamestate===75){
  if(mc.x>700){gamestate=20}
  bg.changeImage("bg8",img8)
  bg.scale=0.8
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=false 
npc7.visible=true
 npc15.visible=true  

  fill("white")
  text("We're leaving for Pearl City, lets go",100,460)
fill("yellow") 
  text("Okay(-100)",170,485)
  text("I'll come back later.",470,485)
  op41=createSprite(200,480,100,20)
   op42=createSprite(500,480,100,20)
  if(mousePressedOver(op41)){
   gamestate=34
    coins=coins-100
  distance=distance-5000}  
  if(mousePressedOver(op42)){
    gamestate=21
  }
  
}

if(gamestate===76) {
 if(mc.x>700){gamestate=20}
  bg.changeImage("bg8",img8)
  bg.scale=0.8
  mc.scale=0.35
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=false 
npc7.visible=true
 npc15.visible=true  
 
    fill("white")
  text("If you want to go to Pearl City, come back when you have a hundred coins",10,460)
fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){
   gamestate=21
    
}    
} 

  if(gamestate===77){
 if(mc.x>700){gamestate=20}
  bg.changeImage("bg8",img8)
  bg.scale=0.8
  mc.scale=0.35
     npc15.visible=true
    npc1.visible=false
 npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false
npc6.visible=false 
npc7.visible=true   
if(t7===2){
  fill("white")
  text("I asked for a beer but this is alright I guess,here are 20 coins. ",10,450)
textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   gamestate=21
  coins=coins+20
  //distance=distance-4000
    s=1
  }
}
  
if(t7===3){
  fill("white")
  text("Fantastic! Here are 40 coins.",300,450)
  textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  
   if(mousePressedOver(op5)){
   gamestate=21
  coins=coins+40
     s=1
  //distance=distance-4000
   }
   }
if(mc.x<0){mc.x=10}
 // if(mc.x>700){mc.x=690}
}
  
 
if(gamestate===33){
  if(mc.x<0){gamestate=17}
  bg.changeImage("bg6",img6)
  bg.scale=1.5
  mc.scale=0.45
  npc1.visible=false
  npc2.visible=false
  npc3.visible=false
  npc4.visible=false
  npc5.visible=false  
  
  fill("white") 
  stroke("black")
  strokeWeight(3)
  textSize(18)
  //xt("(enter)",60,300)
  text("What do you want?",240,150)
  
  fill("yellow") 
  stroke("black")
  strokeWeight(3)
  textSize(20)
 text("Wine",55,485) 
  text("Beer",300,485)
  text("Vodka",520,485)
  
//op1.visible=true
  op1.width=100
  op1.x=100
 // op2.visible=true
  op2.width=100
  op2.x=330
  //op3.visible=true
  op3.width=100
  op3.x=550
  op50.y=480
if(mousePressedOver(op50)){gamestate=18
                         t7=3}
if(mousePressedOver(op4)||mousePressedOver(op3)) {gamestate=18
                                                 t7=2}
// if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690} 
}
  
  
if(gamestate===34){
bg.changeImage("bg9",img9)
bg.scale=0.7
  bg.x=500
  bg.y=232
 npc1.visible=true
  npc1.changeImage("n",img9)
  npc1.scale=0.8
  if(mc.x<20){
     if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}
    }
if(t8===1){
  fill("white")
  text("(catch fish)",370,300)
  if(mousePressedOver(door4)){
    gamestate=43
  }}

if(mousePressedOver(op11)&&k===0){
gamestate=44
}
//  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}
  
if(gamestate===35){
  npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
  fill("white")
  text("(riverbank)",420,300)
  if(mousePressedOver(door3)){
    gamestate=34}
  if(mc.x<0){
    gamestate=36}
   text("(Haynes' house)",140,320)
  if(mousePressedOver(door5)){
     gamestate=37
     }
  if(mousePressedOver(npc4)&&g===0){gamestate=51}
  //if(mousePressedOver(npc4)&&g===1){gamestate=63}
  
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}
  
if(gamestate===61){
  npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
  fill("white")
  text("(riverbank)",420,300)
  if(mousePressedOver(door3)){
    gamestate=34}
  if(mc.x<0){
    gamestate=36}
   text("(Haynes' house)",140,320)
  if(mousePressedOver(door5)){
     gamestate=37
     }
  if(mousePressedOver(npc4)&&g!==2){gamestate=63}
  //if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  
  
if(gamestate===50){
npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
  fill("yellow")
  
text("Do you have any work for me?",10,485)
  text("I got your fishes",10,485)
  
if(mousePressedOver(op6)){gamestate=42} 
text("Did you hear about the Haynes family?",355,485) 
    if(mousePressedOver(op2)&&t2===0){gamestate=41}   
if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}  
}
  
if(gamestate===36){
  bg.changeImage("bg11",img11)
  bg.scale=0.6
  fill("white")
  text("(street)",350,300)
  if(mousePressedOver(door4)) {
   if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}
   }
  text("(castle)",620,300)
  door7=createSprite(660,300,100,50)
  door7.visible=false
  if(mousePressedOver(door7)){
    gamestate=55
  }
  npc8.height=200
  npc8.visible=true
   npc9.visible=true
   if(mousePressedOver(npc8)){
     if(t8===2){gamestate=80}
     if(t8<2){gamestate=40}
   }

  if(mousePressedOver(npc9)&&b2===0){
    gamestate=52
  }
  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}
  
if(gamestate===52){
 bg.changeImage("bg11",img11)
  bg.scale=0.6 
  npc8.visible=true
   npc9.visible=true
  fill("yellow")
  text("Are you Nicholas Cage?",10,485)
  op18=createSprite(80,480,150,20)
  op18.visible=false
  if(mousePressedOver(op18)){gamestate=53}
if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  
  
if(gamestate===53){
 bg.changeImage("bg11",img11)
  bg.scale=0.6 
  npc8.visible=true
   npc9.visible=true
  b2=1
  fill("white")
  text("Yes, is that a book that needs signing?",100,450)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){gamestate=36
                           coins=coins+10}
  if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  
 
if(gamestate===37){
   bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
  npc4.visible=true
  fill("white")
  if(k===0){
   text("(locked)",350,300)
    textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}
  }}
  if(k===1){
    text("(open)",350,300)
    textSize(20)
  stroke("black")
  strokeWeight(3)
  fill("yellow") 
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   gamestate=39} 
  }
 // if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
}  
  
  
  if(gamestate===39){
    npc1.visible=false
    bg.changeImage("bg12",img12)
    bg.x=330
    bg.scale=0.4
    if(mc.x<30){ if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}}
    fill("white")
    textSize(17) 
    text("(search)",230,280)
    text("(search)",380,270)
    text("(search)",150,370)
    text("(search)",560,230)
    var s1=createSprite(180,370,50,50)
    var s2=createSprite(260,260,50,50)
    var s3=createSprite(410,260,50,50)
    var s4=createSprite(590,230,50,50)
    s1.visible=false
    s2.visible=false
    s3.visible=false
    s4.visible=false
    if(mousePressedOver(s1)){gamestate=46}
    if(mousePressedOver(s2)){gamestate=47}
    if(mousePressedOver(s3)){gamestate=48}
    if(mousePressedOver(s4)){gamestate=49}
   // if(mc.x<0){mc.x=10}
  if(mc.x>700){mc.x=690}
     }
 
if(gamestate===46){
bg.changeImage("bg12",img12)
    bg.x=330
    bg.scale=0.4
    if(mc.x<30){gamestate=35}
    fill("white");textSize(17)
    text("(Letters scattered with military information, not adressed to anybody and a half written ",10,380)
  text(" letter adressed to the king)",200,410)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){gamestate=39}
 if(mc.x>700){mc.x=690}} 
  
if(gamestate===47){
bg.changeImage("bg12",img12)
    bg.x=330
    bg.scale=0.4
    if(mc.x<30){gamestate=35}
    fill("white");textSize(17)
    text("(Many books about slave trading history. Some about magical practices)",50,380)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){gamestate=39} 
 if(mc.x>700){mc.x=690}} 
  
  if(gamestate===48){
bg.changeImage("bg12",img12)
    bg.x=330
    bg.scale=0.4
    if(mc.x<30){gamestate=35}
    fill("white");textSize(17)
    text("(Gold coins in foreign currency hoarded behind the painting)",100,380)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){gamestate=39}
   if(mc.x>700){mc.x=690}} 
  
  if(gamestate===49){
bg.changeImage("bg12",img12)
    bg.x=330
    bg.scale=0.4
    if(mc.x<30){gamestate=35}
    fill("white");textSize(17)
    text("(An unfinished book by Mr. Haynes about the various problems in our nation's government.)",10,380)
  fill("yellow") 
  text("Okay",360,485)
  if(mousePressedOver(op5)){gamestate=39}
   if(mc.x>700){mc.x=690}} 
  
  
  
if(gamestate===40){
  bg.changeImage("bg11",img11)
  bg.scale=0.6
  npc8.visible=true
   npc9.visible=true

  if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
}

  if(gamestate==41){
 bg.changeImage("bg11",img11)
  bg.scale=0.6
  npc8.visible=true
     npc9.visible=true
 textSize(20)
stroke("black")
strokeWeight(3)
fill("white")
   
    text("They died because they didn't give offerings at the temple last year",10,450)
 fill("yellow") 
   
    
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   gamestate=36} 
     if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  }
  
  if(gamestate===42)
{ bg.changeImage("bg11",img11)
  bg.scale=0.6
  npc8.visible=true
  npc9.visible=true
 textSize(20)
stroke("black")
strokeWeight(3)
fill("white")
 //if(t8!==2){
 text("Yes, can you catch some fishes by the river? Here's a bow and some arrows",10,440)
 text("The more fishes you get the more money I'll pay",10,460)
 //if(t8===2){
  // text("Thankyou. Here are your coins")
 //}
 
  fill("yellow") 
  text("Okay",360,485)
 t8=1
  if(mousePressedOver(op5)&&t8<2){
   gamestate=36
   } 
 //if(mousePressedOver(op5)&&t8===2){
 //  gamestate=36
// coins=coins+(10*f)
// } 
  if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  }
  
if(gamestate===80){
bg.changeImage("bg11",img11)
  bg.scale=0.6
  npc8.visible=true
  npc9.visible=true
 textSize(20)
stroke("black")
strokeWeight(3)
fill("white")
 //if(t8!==2){
 //text("Yes, can you catch some fishes by the river? Here's a bow and some //arrows",10,440)
// text("The more fishes you get the more money I'll pay",10,460)}
 //if(t8===2){
   text("Thankyou. Here are your coins",200,450)
 //}
 
  fill("yellow") 
  text("Okay",360,485)
 // t8=1
 // if(mousePressedOver(op5)&&t8<2){
  // gamestate=36} 
 if(mousePressedOver(op5)&&t8===2){
   gamestate=36
 coins=coins+(10*f)
   t8=3
 } 
  if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
   
}  
  
  
  
 if(gamestate===43){
  bg.changeImage("bg13",img13)
  bg.scale=1.8
   bg.x=1000
   bg.y=200
 //bg.rotation=360
   npc1.visible=false
   f1.visible=true
   f2.visible=true
   f3.visible=true
   f4.visible=true
   f5.visible=true
   f5.visible=true
   mc.x=100
   bow.visible=true
   arrow.visible=true
   t8=2
   if(arrow.isTouching(f1)){f1.destroy()
                            f=f+1}
   if(arrow.isTouching(f2)){f2.destroy()
                            f=f+1}
   if(arrow.isTouching(f3)){f3.destroy()
                            f=f+1}
   if(arrow.isTouching(f4)){f4.destroy()
                            f=f+1}
   if(arrow.isTouching(f5)){f5.destroy()
                            f=f+1}
   
   text("Arrows left:  "+a1 ,10,90)
   fill("white")
   textSize(14)
  //ext("(click the bow to reload)",330,490)
   
   if(a1===0){text("(Arrows are over)",330,400)
    fill("yellow") 
  text("Okay",360,485)
  
  if(mousePressedOver(op5)){
   gamestate=34
          
             }
 }
  if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}

 // arrow.rotation=0 
   
  if(keyDown(UP_ARROW)&&d===0){
     v =v-1
    arrow.rotation=arrow.rotation-5
  }
   
     if(keyDown(DOWN_ARROW)&&d===0){
  v = v+1
       arrow.rotation=arrow.rotation+5
  }
  
  if(keyDown("space")){ 
    arrow.rotateToDirection=true
  arrow.velocityX=6
  arrow.velocityY=v
  d=1
  }
   
  if(arrow.x>700||arrow.y>500){
    if(mousePressedOver(bow)&&arrow!==0){
      arrow.x=130
        arrow.y=310
      a1=a1-1
      arrow.velocityX=0
      arrow.velocityY=0
      d=0
    }
  } 
textSize(14)
text("Press up and down arrows to move the arrow",10,110)
text("Press the space bar to release and click on the bow to respawn the arrow",10,130)
text("There will be some differance in the direction of the arrow after being released.",10,150)
 }
  
if(gamestate===44){
bg.changeImage("bg9",img9)
bg.scale=0.7
  bg.x=500
  bg.y=232
 npc1.visible=true
  fill("white")
  text("Hey, you're the one investigating the Haynes family, right?",50,420)
fill("yellow")
  op9.y=450
  op9.height=50
  text("Yes, do you have the keys to Mr. Haynes house?",80,450)
  if(mousePressedOver(op9)){
  gamestate=45
  }
  var op14=createSprite(330,470,200,20)
  op14.visible=false
  if(b1===0){
  text("Yes, are you Sairose Ronan?",200,480)
  if(mousePressedOver(op14)){
  gamestate=59}
  }
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
}
  
if(gamestate===59){
bg.changeImage("bg9",img9)
bg.scale=0.7
  bg.x=500
  bg.y=232
 npc1.visible=true
  npc4.visible=false
  fill("white")
  text("I am, do you need me to sign a book? Sure!",150,400)  
  fill("yellow")
  text("Okay",360,430)
  if(mousePressedOver(op13)){
   gamestate=34  
  coins=coins+10
  b1=1}
  op2.y=600
  op6.y=600
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
}
  
if(gamestate===45){
bg.changeImage("bg9",img9)
bg.scale=0.7
  bg.x=500
  bg.y=232
 npc1.visible=true  
  npc1.height=100
  fill("white")
  text("Yes but I'm not allowed to give them to anyone. I could let you in for 40 coins")
  fill("yellow")
text("Okay(-40 coins)",110,485)
  text("Nevermind then",510,485)
  op9.y=470
if(mousePressedOver(op12)&&coins>39){gamestate=34
                                   k=1
                                    coins=coins-40} 
if(mousePressedOver(op10)){
  gamestate=34
}
 if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}}

if(gamestate===51){
npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
 fill("white") 
  if(g===0){
  text("Hey, I overheard some soldiers talking about the murder, i could tell you ",10,440)
    text("what I heard for 30, coins",200,460)
 fill("yellow")
text("Okay(-30 coins)",110,485)
  text("Nevermind then",510,485)
  op9.y=470
if(mousePressedOver(op12)&&coins>29){gamestate=58
                                  coins=coins-30
                                    g=1} 
if(mousePressedOver(op10)){ if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}}  } 
  // if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
}  

if (gamestate===63){
  npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
textSize(20)
  fill("white")
  text("I could tell you more for just 30 coins",10,450)
 fill("yellow")
text("Okay(-30 coins)",110,485)
  text("Nevermind then",510,485)
  op9.y=470
if(mousePressedOver(op12)&&coins>39){
  gamestate=64
                                  coins=coins-40
                                    g=2
} 
if(mousePressedOver(op10)){
  if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61}}   
  
  // if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
}  
 
if(gamestate===58){
npc1.visible=false
  npc4.visible=false
  npc5.visible=false
  npc8.visible=false
  npc9.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
 fill("white") 

  text("Mr. Haynes was the minister responsible for public welfare but apparently",10,360)  
    text("the last couple days, he was a little too interested in other ministers' business",10,380)
  text("Tell me if you want to know more.",10,400)
 fill("yellow")
  text("Okay",360,430)
  if(mousePressedOver(op13)){
   gamestate=61  }
//text("Okay(-40 coins)",110,405)
 // text("Nevermind.",510,405)
 // op9.y=470
 // op20=createSprite(150,400,100,20)
 // op21=createSprite(550,400,100,20)
//op20.visible=false
 // op21.visible=false
//if(mousePressedOver(op20)){
 // gamestate=54
                                  //coins=coins-40
                                  // } 
//if(mousePressedOver(op21)){
 // gamestate=35
//}     

 if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  }  

  if(gamestate===64){
npc1.visible=false
  npc4.visible=true
  npc4.changeImage("n",npc11img)
  npc4.scale=0.4
  npc4.y=350
  npc4.x=630
  npc4.width=40
  bg.changeImage("bg10",img10)
  bg.scale=0.75
  bg.x=330
  bg.y=250
 fill("white") 
  
  text("I know everybody says the king got them assaninated but the king would never do     that,",10,320) 
  text("in fact Mr. Haynes was the king's favourite minister.",10,340)
    fill("yellow")
  text("Okay",360,430)
  if(mousePressedOver(op13)){
   if(g===0){
    gamestate=35}
  if(g!==0){gamestate=61} }

   //if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  } 
  
if(gamestate===55){
bg.changeImage("bg14",img14)
bg.scale=0.8  
npc1.visible=false
npc10.visible=true
npc10.x=530
  npc10.y=320
  npc10.scale=0.39
if(mousePressedOver(npc10)){
  gamestate=56} 
 //if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690} if(mc.x<0){gamestate=36}
  }

if(gamestate===56){
bg.changeImage("bg14",img14)
bg.scale=0.8  
npc1.visible=false
npc10.visible=true
npc10.x=530
  npc10.y=320
  npc10.scale=0.39
  fill("white")
  text("Oh, you're finally here! You can explore the city for a while and then come",10,440)
  text("here when you want to go meet the king.",100,460)
fill("yellow")
text("Okay, I'm ready now",110,485)
  text("I'll come back later",510,485)
  op9.y=470
  op17=createSprite(200,480,150,20)
  op17.visible=false
if(mousePressedOver(op17)){gamestate=57} 
if(mousePressedOver(op10)){gamestate=55} 
   if(mc.x<0){gamestate=36}
   if(mc.x>700){mc.x=690}
}
  
if(gamestate===57){
bg.changeImage("bg15",img15) 
  bg.scale=1.25
  npc11.visible=true
  npc12.visible=true
  npc13.visible=true
  npc14.visible=true
  npc1.visible=false
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  fill("white")
  text("Ah, You're here! So tell me what is it?",200,440)
  op20=createSprite(200,460,200,20)
  op21=createSprite(550,460,200,20)
  op22=createSprite(350,460,50,20)
  op20.visible=false
  op21.visible=false
  op22.visible=false
  fill("yellow")
  text("Okay, I'm ready",150,465)
  text("I'm not sure actually",450,465)
  if(mousePressedOver(op20)){gamestate=65}
  if(mousePressedOver(op21)){gamestate=66}
}  
  
if(gamestate===65){
bg.changeImage("bg15",img15) 
  bg.scale=1.25
  npc11.visible=true
  npc12.visible=true
  npc13.visible=true
  npc14.visible=true
  npc1.visible=false
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  fill("white")
  text("Good, because the council has put their faith in you.",150,440) 
  fill("yellow")
  text("Okay.",310,465)
  if(mousePressedOver(op22)){gamestate=67}
}
  
 if(gamestate===66){
bg.changeImage("bg15",img15) 
  bg.scale=1.25
  npc11.visible=true
  npc12.visible=true
  npc13.visible=true
  npc14.visible=true
  npc1.visible=false
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  fill("white")
  text("Well, you have surely taken your time coming here. We can't afford to wait.",10,420) 
   text("any longer.",300,440)
   fill("yellow")
  text("Okay.",310,465)
  if(mousePressedOver(op22)){gamestate=67}
} 

if(gamestate===67){
bg.changeImage("bg15",img15) 
  bg.scale=1.25
  npc11.visible=true
  npc12.visible=true
  npc13.visible=true
  npc14.visible=true
  npc1.visible=false
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  fill("white")
  text("You better remeber that your action swill have consequences. I hope you have",10,420) 
   text("come to a correct conclusion",300,440)
   fill("yellow")
  text("Yes, your majesty.",110,465)
  if(mousePressedOver(op20)){gamestate=68}
}  
  
if(gamestate===68){
bg.changeImage("bg15",img15) 
  bg.scale=1.25
  npc11.visible=true
  npc12.visible=true
  npc13.visible=true
  npc14.visible=true
  npc1.visible=false
   if(mc.x<0){mc.x=10}
   if(mc.x>700){mc.x=690}
  fill("white")
  text("So what is it?",300,460) 
   fill("yellow")
  textSize(18)
 text("Mr. Haynes disagreed with the king's policies so the king got him assaninated.",50,150)
 text("The ministers were jealous of the praise Mr. Haynes was getting so they plotted his",10,190)
  text("murder.",330,210) 
text("Mr. Haynes was paticipating in illegal slave trading, so he was killed by the general",30,250)
 text("Mr. Haynes was selling military information to enemy nations, so he was killed by the",10,290)
   text("general.",330,310)
  text("Mr. Haynes welfare policies were unfair and hence he was killed by the rebels",50,360)
  text("Mr. Haynes was having an affair with the queen so the king got him assaninated.",50,410)
  op30=createSprite(350,145,700,20)
   op31=createSprite(350,195,700,40)
   op32=createSprite(350,245,700,20)
   op33=createSprite(350,295,700,40)
   op34=createSprite(350,355,700,20)
   op35=createSprite(350,405,700,20)
   op30.visible=false
   op31.visible=false
   op32.visible=false
   op33.visible=false
   op34.visible=false
   op35.visible=false
   if(mousePressedOver(op30)){e=1
                             gamestate=69}
  if(mousePressedOver(op31)){e=2
                             gamestate=69}
  if(mousePressedOver(op32)){e=3
                             gamestate=69}
  if(mousePressedOver(op33)){e=4
                             gamestate=69}
  if(mousePressedOver(op34)){e=5
                             gamestate=69}
  if(mousePressedOver(op35)){e=6
                             gamestate=69}
}  
 
if(gamestate===69){
  bg.visible=false
  necklace.visible=false
  mc.visible=false
   npc2.visible=false
  fill("white")
  text("A few years later..",300,250)
  fill("yellow")
  textSize(16)
  text("(tap to continue)",300,450)
  op40=createSprite(350,445,100,20)
  op40.visible=false
  if(mousePressedOver(op40)){gamestate=70}
}  
  
if(gamestate===70){
   scroll2.visible=true
  mc.visible=false
  npc1.visible=false
  npc2.visible=false
  //scroll.visible=false
  scroll2.rotattion=360
  scroll2.scale=1.3
  bg.visible=false
  bg.changeImage("bg16",img16)
  bg.scale=3.6
  fill("black")
  strokeWeight(1)
  if(e===1){
  text("The king was exiled for murder and not heard of again. His sixteen     ",50,100) 
    text("year old son was the new emperor of Cordonia. His wife and son, ",50,120)
    text("both heartbroken, were in no condition to rule an empire as vast as ",50,140)
 text("Cordonia. Due to the incapibility of the new king, Cordonia was ",50,160)
  text("attacked by its enemy nations and eventually.... it fell.",50,180)
  }
  
  if(e===2){
  text("The council was given a death penalty and a new one was elected.",50,100) 
    text("Due the inexperienced ministers, the country faced a major economic",43,120)
    text("setback but they were able to recover. Some time later the enemy ",50,140)
 text("nations attacked. Within the first few hours of battle it was realised",50,160)
  text("that Cordonia's fall was inevitable. After a day long battle, Cordonia",50,180)
    text("came under the rule of its neighbouring nation.",50,200)
  }
  
  if(e===3){
  text("The general was given a death penalty and normal life resumed",50,100) 
    text("for a couple months, until the enemy nations attacked, Within the",43,120)
    text("first few hours of battle it was realised that Cordonia's fall was",50,140)
  text("",50,140)
 text("inevitable. After a day long battle, Cordonia came under the rule of ",50,160)
  text("its neighbouring nation.",50,180)
   // text("Cordonia came under the rule of its neighbouring nation.",50,200)
  }
  
  if(e===4){
  text("The genral was put in jail andgiven a death penalty, he claimed Mr.",50,100) 
    text(" Haynes was selling military secrets but the king did not believe him.",43,120)
    text("When the enemy nations attacked, the king realized that the genral's ",50,140)
 text("suspicions were true. The general was released and Cordonia fought ",43,160)
  text("back. After days of tiring battle, the enemy nations surrendered and",50,180)
    text("came under the rule of the king.",50,200)
  }
  if(e===5){
  text("The rebels were hunted down and given a life sentence. This caused",50,100) 
    text("a lot of aggresion among the common folk and more rebels started",43,120)
    text("revolting. Taking this oppurtunity, the enemy nations attacked.",50,140)
 text("Within the first few hours of battle it was realised that Cordonia's fall",50,160)
  text("was inevitable. After a day long battle, Cordonia came under the rule",50,180)
    text("of its neighbouring nation.",50,200)
  }
  if(e===6){
  text("The king was exiled for murder and not heard of again. His sixteen     ",50,100) 
    text("year old son was the new emperor of Cordonia. His wife recieved",50,120)
     text("a lot of backlash from the common folk even though she denied",50,140)
    text(" everything. His wife and son, both heartbroken, were in no condition  ",45,160)
 text("to rule an empire as vast as  Cordonia. Due to the incapibility of the  ",50,180)
  text("new king, Cordonia was attacked by its enemy nations and ",50,200)
    text("eventually ....it fell",50,220)
  }
  
  textSize(18)
  fill("yellow")
    stroke("black")
  strokeWeight(3.9)
  text("(Click here to play again)",250,300)
  op45=createSprite(350,300,300,20)
  op45.visible=false
  if(mousePressedOver(op45)){restart()}
}
  
if(gamestate===71){
  scroll.visible=true
  mc.visible=false
  npc1.visible=false
  bg.changeImage("bg16",img16)
  bg.scale=3.6
  fill("black")
  strokeWeight(1)
  textSize(18)
  text("I require your assistance in an important matter.",140,100)
  text("As you may have heard, the Haynes, a noble family,",140,115)
  text("was recently murdered. Some people say it was an ",140,130)
    text("assanination.",140,145)
  text("I need you to investigate the murder,and come to Pearl ",137,170)
    text("City as soon as possible. While on the way you can try",140,185)
    text("to get some information from the locals.",140,200)
  text("Myself and the council have faith that you will bring",140,225)
    text("the Haynes family, justice.",140,240)
  text("Emperor of Cordonia,",140,280)
  seal.visible=true
  seal.scale=0.1
  seal.x=190
  fill("yellow")
  stroke("black")
  strokeWeight(4)
  text("(continue)",300,405)
  if(mousePressedOver(op41)){gamestate=72}
  op41.y=400
} 
  
if(gamestate===72)  {
   bg.visible=false
  necklace.visible=false
  mc.visible=false
  npc2.visible=false
  fill("white")
  text("(Collect as many coins as possible, they will help you in the future.)",50,250)
  text("(You can move with the help of left and right arrow keys.)",100,280)
  text("(Click on NPCs to interact with them)",200,310)
  fill("yellow")
  textSize(16)
  text("(tap to continue)",300,450)
  op40=createSprite(350,445,100,20)
  op40.visible=false
  if(mousePressedOver(op40)){gamestate=2}
}
  
}

function message(){
 fill("white") 
  stroke("black")
  strokeWeight("3")
 textSize(20)
 text("Hello, young traveller. I hear you're looking for a way to the Pearl City.",50,400) 
 text(" I can help you in that. But first you must deliver this package to Miss Smith.",10,420)
}

function move(){
  if(keyDown("left")){
  mc.x=mc.x-5}
  if(keyDown("right")){
  mc.x=mc.x+5}
}

function option1(){
textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
if(t1===0){  
text("Are you Miss Smith?",155,485)}
  if(t2===0){
text("Do you have any work for me?",385,485)}
if(t2===2){
text("I found your necklace",385,485)  
}
}

function message2(){
   textSize(20)
stroke("black")
strokeWeight(3)
fill("yellow")
  op2.y=480
    op6.y=470
if(t8!==2){
text("Do you have any work for me?",10,485)}
if(t8===2){
  text("I got your fishes",10,485)
}
if(mousePressedOver(op6)){gamestate=42} 
text("Did you hear about the Haynes family?",355,485) 
  op15=createSprite(550,480,180,20)
  op15.visible=false
    if(mousePressedOver(op15)&&t2===0){gamestate=41} 
}

function restart(){
 gamestate=71;
 bg.visible=true
 distance=10000;coins=0;
 t1=0;t2=0;t3=0;t4=0;t5=0;t6=0;t7=0;t8=0;
 a1=5;a2=0;k=0;f=0;b1=0;b2=0;q=0;g=0;e=0;s=0  
  
}


