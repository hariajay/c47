class Stand{
    constructor(x,y,w,h,img){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.img = img
        this.w = w
        this.h = h
        World.add(wld,this.body)
    }
    display(){
      var pos = this.body.position
      push()
      image(this.img,pos.x,pos.y,this.w,this.h)
      pop()
    }
}