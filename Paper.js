class PaperClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
	        'resitution':0.3,
	        'friction':0.5,
	        'density':1.2
        }
        this.body = Bodies.rectangle(x, y, radius, options);
        this.radius = radius
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
      }
}