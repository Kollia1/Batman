class Drops{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.01
        }
        this.radius=5
        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);                
    }
  
    display(){
        
        
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        if(this.body.position.y>400){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

}