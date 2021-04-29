const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var rain;;
var maxDrop = 100;
var drop = [];
function preload(){
    
}

function setup(){
   engine = Engine.create();
   world = engine.world();
    
   
   
    
  
}

function draw(){
    createCanvas(400,600);
    background("black");

    //rain = new deww(200,100)


    if(frameCount%80 === 0){
        for(var i=0;i<maxDrop;i++){
            drops.push(new deww(random(0,400),-1))
        }
    }

    drawSprites();
}   

