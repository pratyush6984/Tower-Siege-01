class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':0,
            //'density':0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
          fill("blue")
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0,30, 40);
        pop();
      }
}