class Block {
    constructor(x, y, width, height){
      
      var options = {
        'restitution':0.8,
        'friction':5.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    World.add(world, this.body);
  }
    
    display(){
     if(this.body.speed<6){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
     fill("pink");
     rect(0, 0, this.width, this.height);
      pop()
     }else{
      World.remove(world, this.body);
      push();
      this.visiblity= this.visiblity-5;
      pop()
     }
       
    }
    score(){
      if (this.visiblity < 0 && this.visiblity > -105){
        score=score+1;
      }
    }
  }