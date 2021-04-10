class Ground{
    constructor(x,w){
        this.body = Bodies.rectangle(x,410,w,12,{isStatic:true})
        World.add(wld,this.body)
        this.w = w
    }
    display(){
        fill(0)
        rectMode(CENTER)
        rect(this.body.position.x,410,this.w,12)
    }
}