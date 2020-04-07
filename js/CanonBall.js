class CanonBall {
  constructor(x, y,color) {
    var options = {
      "density" :   10.5,
      "friction" : 1.0,
      "restitution" : 0.2,
      "frictionAir":0.06
    }
    this.body=Bodies.rectangle(x,y,25,50,options);
    this.color=color;
    World.add(world,this.body);
  };

  display(){
   fill(this.color);
    rect(this.body.position.x,this.body.position.y,25,50);

  };
};
