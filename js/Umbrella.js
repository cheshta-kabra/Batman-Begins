class Umbrella {
    constructor(x,y){
        var options ={
            isStatic : true
        }
this.body = Bodies.circle(x,y,65,options)
World.add(world , this.body)


    }

    display(){
        var pos = this.body.position;
image(manI,pos.x-70,pos.y-75,144,250)
    }
}