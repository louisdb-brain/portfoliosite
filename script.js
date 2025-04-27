
const video = document.querySelector('.video-bg');
const source = document.createElement('source');
source.src = 'BG_video.mp4';
source.type = 'video/mp4';
video.appendChild(source);
video.load();
var clicks=0
document.addEventListener('click', function(event) {
    clicks+=1;
    const mouseX = event.clientX; // X position inside the viewport
    const mouseY = event.clientY; // Y position inside the viewport
    const margin=10
    new animatedwindow(margin,margin,100,500+margin,margin,10,"rgba(20, 20, 50, 0.1)",newCanvasContainter("test"+clicks,mouseX,mouseY));
});
/*
const titles=document.querySelectorAll("h1");
titles.forEach((title,index)=>{
    moveItems(title,-10000,1000,0,50);
});*/



//const newdiv=newCanvasContainter("blabla");
//const test=new animatedwindow(10,10,100,500,10,1,"blue",newdiv);
//const test= new animatedwindow(10,50,100,500,10,10,"blue",newCanvasContainter("test"))
//const context=document.getElementById('test-canvas').getContext("2d");
//const context=test.getCanvas().getContext('2d')
//context.fillRect(20,20,200,200);
//console.log(context);

function moveItems(pItem, percentX, percentY, pFrame, pSteps) {
    const currentPercent = getTranslatePercent(pItem);

    const vectorX = (percentX - currentPercent.x) / pSteps;
    const vectorY = (percentY - currentPercent.y) / pSteps;

    if (pFrame < pSteps) {
        moveByPercent(pItem, currentPercent.x + vectorX, currentPercent.y + vectorY);
        requestAnimationFrame(() => moveItems(pItem, percentX, percentY, pFrame + 1, pSteps));
    } else {
        moveByPercent(pItem, percentX, percentY); // Ensure it reaches the target
    }
}

function moveByPercent(pItem, targetX, targetY) {
    pItem.style.transform = `translate(${targetX}%, ${targetY}%)`;
}

function getTranslatePercent(elem) {
    const values = getTranslateValues(elem);
    const parent = elem.parentElement;
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    return {
        x: (values.x / parentWidth) * 100,
        y: (values.y / parentHeight) * 100
    };
}

function getTranslateValues(elem) {
    const style = window.getComputedStyle(elem);
    const matrix = new WebKitCSSMatrix(style.transform);

    return {
        x: matrix.m41, // translateX in pixels
        y: matrix.m42  // translateY in pixels
    };
}


function newCanvasContainter(pId,x,y)
{
    const containerDiv = document.createElement('div');
    containerDiv.id = 'div'+pId;
    document.body.appendChild(containerDiv);
    containerDiv.style.position = 'absolute';
    containerDiv.style.left = x + 'px';
    containerDiv.style.top = y + 'px';
    // Applying flex styling to the container div
    containerDiv.style.display = 'flex';
    containerDiv.style.flexWrap = 'wrap';
    containerDiv.style.gap = '10px';
    // Proper gap between items in the flex container

   /* const canvas = document.createElement('canvas');
    canvas.id = pId + '-canvas';
    containerDiv.appendChild(canvas);*/

    return containerDiv;
}
import {animatedwindow} from './classes.js'


