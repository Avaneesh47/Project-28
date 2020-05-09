class Ball{
    constructor(x,y,radius){
        var options = {
            /*'restitution':0.8,
            'friction':1.0,
            'density':1.0*/
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        var r = Math.round(random(0,255));
        var g = Math.round(random(0,255));
        var b = Math.round(random(0,255));
        fill(r,g,b);
        noStroke();
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}