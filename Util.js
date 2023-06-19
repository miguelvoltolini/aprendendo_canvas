class Object{
    constructor(x,y,w,h,atrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.atrib = atrib
    }

    dir = 0
    
    des_obj(){
        des.strokeStyle = this.atrib
        des.rect(this.x,this.y,this.w,this.h)
        des.lineWidh = '8'
        des.stroke()
    }

    move(){
    
        console.log(this.dir)
    }
}