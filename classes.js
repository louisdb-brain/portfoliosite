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
        //this.ctx.fillStyle=this.color;
        //this.ctx.fillRect(10,10,10,10);
        this.drawRoundedRect(this.ctx,this.x,this.y,this.width,this.height,3,this.color,"white",2,"white",this.margin);
        //this.getCanvas().height=this.currentheight+this.margin;
        //this.ctx.fillRect(this.x, this.y, this.width, this.currentheight)


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
    drawRoundedRect(ctx, x, y, width, height, radius, fillColor, borderColor, borderWidth, shadowColor, shadowBlur) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    // Fill first
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Add shadow settings for the stroke
    ctx.shadowColor = shadowColor;
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetX = 0; // You can adjust if you want
    ctx.shadowOffsetY = 0; // You can adjust if you want

    // Stroke second
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = borderColor;
    ctx.stroke();

    // Reset shadow settings (important, or everything after this will have shadows too!)
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    }


}