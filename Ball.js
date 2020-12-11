class Ball{
    constructor(x,y,r){
        var ops={
            isStatic:false,
            friction:0.5,
            restitution:0.8,
            density:1.2
            }
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(x,y,r,ops);
        World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("black");
    stroke("white");
    image(this.image,0,0,50,50);
    pop();
}
}