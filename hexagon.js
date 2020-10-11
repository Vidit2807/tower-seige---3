class Hexagon {
  constructor(x, y,radius) {
    var options={
      isStatic:false,
      restitution:0.3 ,
      friction :0.5,
      density:1.3
    }
    this.body = Bodies.circle(x, y, radius,options);
    this.radius = radius;
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   ellipseMode(RADIUS);
    push();
    translate(pos.x, pos.y);
   fill("yellow");
   ellipse(0,0,20);
   
    pop();
  }
};