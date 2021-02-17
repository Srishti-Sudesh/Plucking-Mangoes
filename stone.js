class Stone{
    constructor(x,y,r){
		var options={
			isStatic:false,
			friction:1,
			density:1.2,
			restitution : 0
		}

		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }

    display(){
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		imageMode(CENTER);
		fill("grey");
		image(this.image,0,0,this.r*2,this.r*2);
		pop();
    }
}