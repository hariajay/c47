class Sharp{
  constructor(x,y,img){
    this.body = Bodies.rectangle(x,y,40,40,{isStatic:true})
    this.img = img
    World.add(wld,this.body)
  }
  display(){
      push()
      image(this.img,this.body.position.x,this.body.position.y,60,55)
      pop()
  }
}