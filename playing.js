class Player extends Base
{
    constructor(x,y)
    {
      super(x,y,50,50);
      this.image=loadImage("pics/runningboy.png");
    }

    
    display()
    {
     // rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
           imageMode(CENTER);
           
        image(this.image, 200,400, this.width, this.height);
    }
}
