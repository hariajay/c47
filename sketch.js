const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var gameState = 0
var bg1,bg2
var eng,wld
var red,b1,volley,b2,foot,b3
var ground
var stand
var hanger
var coin,ca,star
var ting
var blow,boom,time
var nail,rec,type
var start,button,green
var carbon,magnet,shield
var stick,stick,frame
var score=0
var x = 0
var light,bc,coin,lightning
var collide,water,sharp
var g1,s1 = []
var s2 = [],s3=[],s4=[],s5=[],s6=[],s7=[]
var s3,stand2,stick1,st4,lava
var num = 300,weapon,wimg,chain,grass,st1
var ins,story,intro,tools

function preload(){
  bg1 = loadImage("images/brown.jpg")
  bg2 = loadImage("images/hills.png")
  bg3 = loadImage("images/mount.png")
  b1 = loadImage("images/red.png")
  b2 = loadImage("images/volley.png")
  b3 = loadImage("images/football.png")
  st4 = loadImage("images/st4.png")
  light = loadImage("images/lightning.png")
  bc = loadImage("images/bounce.png")
  frame = loadImage("images/frame.png")
  lava = loadImage("images/lava.png")
  st1 = loadImage("images/stand1.png")
  st2 = loadImage("images/stand2.png")
  st3 = loadImage("images/stand3.png")
  lava = loadImage("images/lava.png")
  wimg = loadImage("images/weapon.png")
  type = loadImage("images/text.png")
  shield = loadImage("images/shield.png")
  water = loadImage("images/water.png")
  lightning = loadImage("images/light.png")
  carbon = loadImage("images/diamond.png")
  time = loadImage("images/timer.png")
  sh1 = loadImage("images/blade.png")
  sh2 = loadImage("images/blade2.png")
  button = loadImage("images/red button.png")
  green = loadImage("images/green button.png")
  ins = loadImage("images/ins.png")
  intro = loadImage("images/intro.png")
  story = loadImage("images/story.png")
  tools = loadImage("images/tools.png")
  stick = loadImage("images/stick1.png")
  stick2 = loadImage("images/stick2.png")
  star = loadImage("images/c1.png")
  rec = loadImage("images/rect.png")
  magnet = loadImage("images/magnet.png")
  start = loadImage("images/play.png")
  //boom = loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png")
  //ca = loadAnimation("images/c1.png","images/c2.png","images/c3.png","images/c4.png","images/c5.png","images/c6.png")
}
function setup(){
    createCanvas(560,460)
    if(gameState == 0){
    eng = Engine.create()
    wld = eng.world
  red = Bodies.circle(20,300,29,{restitution:0.6,friction:0})
  World.add(wld,red)
  ground = Bodies.rectangle(2900,400,6000,12,{isStatic:true})
  World.add(wld,ground)
  collide = Bodies.rectangle(-30,170,10,460,{isStatic:true})
  World.add(wld,collide)
  light = Bodies.rectangle(3900,200,30,420,{isStatic:true})
  World.add(wld,light)
  weapon = Bodies.circle(4250,260,30)
  World.add(wld,weapon)
  stand3 = Bodies.rectangle(1400,300,40,40,{isStatic:true})
  World.add(wld,stand3)
  stand9 = Bodies.rectangle(5850,300,40,40,{isStatic:true})
  World.add(wld,stand9)
  coin = new Coin(num,360)
  for(var i=400; i<560; i+=25){
    s1.push(new Sharp(i,438,sh1))
  }
  for(var i=1215; i<1615; i+=25){
    s2.push(new Sharp(i,438,sh1))
  }
  for(var i=2535; i<3035; i+=25){
    s3.push(new Sharp(i,438,sh1))
  }
  for(var i=5590; i<6140; i+=25){
    s4.push(new Sharp(i,438,sh1))
  }
  //for(var i=200; i<400; i+=25){
    //s5.push(new Sharp(655,i,sh2))
  //}
  //var option = {
  //  bodyA: weapon,
  //  pointB:{x:4250,y:10},
  //  length:50,
  //  stiffness:0.4
  //}
  chain1 = new Chain(weapon,{x:4400,y:20})
  g1 = new Ground(185,400)
  g2 = new Ground(882,630)
  g3 = new Ground(2062,925)
  g4 = new Ground(4300,2540)
  g5 = new Ground(6507,760)
  if(gameState == 0){
  stand1 = new Stand(800,300,300,44,st1)
  stand2 = new Stand(1900,300,300,44,st1)
  stand4 = new Stand(2250,200,300,44,st1)
  stand5 = new Stand(3200,300,300,44,st1)
  stand6 = new Stand(3500,300,300,44,st1)
  stand7 = new Stand(4900,200,300,44,st1)
  stand8 = new Stand(5250,300,300,44,st1)
  stick1 = new Stand(2610,300,100,10,stick)
  stick2 = new Stand(2750,250,100,10,stick)
  stick3 = new Stand(2890,200,100,10,stick)
  //stick4 = new Stick()
  }
 
 //for(var i=515; i<965; i+=25){
  //s6.push(new Sharp(i,438,sh1))
//}
 //for(var i=1600; i<1920; i+=25){
  //s7.push(new Sharp(i,438,sh1))
 //}
 //stand9 = new Stand(250,300,300,44,st2)
 //stand10 = new Stand(725,290,40,40,st4)
 //stand11 = new Stand(1300,290,300,44,st2)
 //stand12 = new Stand(1200,180,300,44,st4)
 //stand13 = new Stand(1750,250,300,17,stick)
 //stand14 = new Stand(1750,250,19,280,stick2)
 //stand15 = Bodies.rectangle(2900,250,35,300)
 //World.add(wld,stand15)
}
}
function draw(){
  background(0)
  Engine.update(eng)
 
  imageMode(CENTER)
  image(bg2,3850,160,8000,650)
  //image(water,725,428,450,72)
  //image(water,1750,428,330,72)
  image(b1,red.position.x,red.position.y,56,56)
  chain1.display()
  //image(lava,2350,428,300,72)
  camera.position.x = red.position.x+130
  camera.position.y = 230
  //stand9.display()
  //stand10.display()
  //stand11.display()
  //stand12.display()
  //stand13.display()
  //stand14.display()
  //fill('brown')
  //rect(stand15.position.x,stand15.position.y,35,300)
  for(var b = 0; b<s6.length; b++){
    s6[b].display()
  }
  for(var b = 0; b<s7.length; b++){
    s7[b].display()
  }
  if(keyDown("space")){
    Matter.Body.applyForce(red,red.position,{x:0,y:-0.01})
  }
  if(keyDown("left")){
   Matter.Body.applyForce(red,red.position,{x:-0.0012,y:0})
  }
  if(keyDown("right")){
    Matter.Body.applyForce(red,red.position,{x:0.0012,y:0})
  }
  if(gameState == 0){
 
  imageMode(CENTER)
 
  image(rec,camera.position.x-200,30,95,45)
  image(water,475,428,175,72)
  image(water,1400,428,400,72)
  image(water,2775,428,500,72)
  image(water,5850,428,550,72)
 
  image(lightning,3900,200,50,420)
  image(wimg,weapon.position.x,weapon.position.y,70,70)
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  g5.display()
  for(var b = 0; b<s5.length; b++){
    s5[b].display()
  }
  image(star,camera.position.x-223,30,28,28)
  image(st3,stand3.position.x,stand3.position.y,40,40)
  //image(st3,stand9.position.x,stand9.position.y,40,40)
  textSize(23)
  fill(0)
  text(score,camera.position.x-200,38)
  //strokeWeight(5)
  //line(chain.pointB.x,chain.pointB.y,weapon.position.x,weapon.position.y)
  
  for(var b = 0; b<s1.length; b++){
    s1[b].display()
  }
  for(var b = 0; b<s2.length; b++){
    s2[b].display()
  }
  for(var b = 0; b<s3.length; b++){
    s3[b].display()
  }
  for(var b = 0; b<s4.length; b++){
    s4[b].display()
  }
  stick1.display()
  stick2.display()
  stick3.display()
  stand1.display()
  stand2.display()
  stand4.display()
  stand5.display()
  stand6.display()
  stand7.display()
  stand8.display()
 }
  drawSprites()
}