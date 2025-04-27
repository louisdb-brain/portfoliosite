export class animatedwindow
{
    constructor(x,y,width,height,margin,speed,color,container){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.currentheight=1;
        const newCanvas = document.createElement("canvas");

        this.margin=margin;
        this.color=color;

        container.appendChild(newCanvas);
        this.ctx=newCanvas.getContext("2d");
        this.animate();
    }
    update(){
        if (this.currentheight<this.height)
        {
            this.currentheight+=this.speed;
            if (this.currentheight > this.height) {
                this.currentheight = this.height;
            }
        }
        else {
            console.log("animation complete");
        }
        this.getCanvas().height=this.currentheight;
        console.log(this.currentheight);

    }
    draw(){
        this.ctx.fillStyle=this.color;
        //this.ctx.fillRect(10,10,10,10);
        this.ctx.fillRect(this.x, this.y, this.width, this.currentheight)


    }
    animate() {
        let thiscanvas = this.getCanvas();

        this.ctx.clearRect(0, 0, thiscanvas.width, thiscanvas.height);  // Clear the canvas
        this.update();  // Update the window's height
        this.draw();    // Draw the window
        if (this.currentheight < this.height) {
            requestAnimationFrame(() => this.animate());
        }
    }


    getCanvas()
    {
        return this.ctx.canvas;
    }


}