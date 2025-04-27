
const video = document.querySelector('.video-bg');
const source = document.createElement('source');
source.src = 'BG_video.mp4';
source.type = 'video/mp4';
video.appendChild(source);
video.load();

const titles=document.querySelectorAll("h1");
titles.forEach((title,index)=>{
    moveItems(title,-500,1000,0,50);
});

function moveItems(pItem,percentX,percentY,pFrame,pSteps)
{

    let currentPercent=getTranslatePercent(pItem);
    let vector = [
        currentPercent.x + (percentX / pSteps),
        currentPercent.y + (percentY / pSteps)
    ];
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
function moveBypercent(pItem,pTarget)
{
    pItem.style.transition = 'transform 0.1s ease-in-out';
    pItem.style.transform = `translate(${pTarget[0]}%, ${pTarget[1]}%)`;

}


function newCanvasContainter(pId)
{
    const containerDiv = document.createElement('div');
    containerDiv.id = 'div'+pId;
    document.body.appendChild(containerDiv);

    // Applying flex styling to the container div
    containerDiv.style.display = 'flex';
    containerDiv.style.flexWrap = 'wrap';
    containerDiv.style.gap = '10px'; // Proper gap between items in the flex container

   /* const canvas = document.createElement('canvas');
    canvas.id = pId + '-canvas';
    containerDiv.appendChild(canvas);*/

    return containerDiv;
}
import {animatedwindow} from './classes.js'

//const newdiv=newCanvasContainter("blabla");
//const test=new animatedwindow(10,10,100,500,10,1,"blue",newdiv);
const test= new animatedwindow(10,50,100,500,10,10,"blue",newCanvasContainter("test"))
//const context=document.getElementById('test-canvas').getContext("2d");
const context=test.getCanvas().getContext('2d')
//context.fillRect(20,20,200,200);
console.log(context);
