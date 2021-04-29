class deww{
    constructor(x,y){
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
           }

        this.body = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.r = 5;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.r);
        pop();
      }
}
function setPosition(){
    
}