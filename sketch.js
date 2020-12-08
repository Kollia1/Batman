const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body; 
var maxDrops=100;
var drops=[];
var rand=0;
function preload(){
    walking=loadImage("Walking/walking_1.png")
    thunder1=loadImage("thunderbolt/1.png")
    thunder2=loadImage("thunderbolt/2.png")   
    thunder3=loadImage("thunderbolt/3.png")
    thunder4=loadImage("thunderbolt/4.png")
}
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    man=new Umbrella(200,310)

    //drops=new Drops(200,10)
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }
    
}
function draw(){
    background(0)
    Engine.update(engine);
    


    man.display()
    
    for(var i=0; i<maxDrops; i++){
        drops[i].display()
    }
    if(frameCount%80===0){
        rand=Math.round(random(1,4))
        switch(rand){
            case 1:image(thunder1,200,200);
            break;
            case 2:image(thunder2,200,200);
            break;
            case 3:image(thunder3,200,200);
            break;
            case 4:image(thunder4,200,200);
            break;
            default:break;
        }
  
    }
    

}   

