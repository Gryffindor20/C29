class SlingShot{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        image(this.sling1,200,80, 40, 140)
        
        if(this.sling.bodyA)
        {
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(64,27,9);
            line(pointA.x-10, pointA.y, 190, 106);
            line(pointA.x+10, pointA.y, 233, 100);
            image(this.sling3, pointA.x - 25, pointA.y-5, 10, 20)
            pop();
        }
    }

    display2()
    {

        if(this.sling.bodyA)
        {
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(64,27,9);
            line(pointA.x-10, pointA.y, 190, 106);
            pop();
        }
        image(this.sling2, 173, 90, 40, 70);
    }


    
}