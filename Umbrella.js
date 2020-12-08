class Umbrella{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0
        }
        
        this.body=Bodies.circle(x,y,70,options)
        this.image=loadImage("Walking/walking_1.png")
        World.add(world,this.body);
    }
    display(){


        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 200, 200);
    }
}