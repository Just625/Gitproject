let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle="green";
// ctx.fillRect(100,100,100,100);
// ctx.fillStyle="blue";
// ctx.fillRect(200,200,100,100);
// ctx.fillStyle="black";
// ctx.fillRect(300,100,100,100);
// ctx.fillStyle="red";
// ctx.fillRect(200,100,100,100);
// ctx.fillStyle="yellow";
// ctx.fillRect(200,300,100,100);
// ctx.fillStyle="orange"
// ctx.fillRect(200,400,100,100);
//
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(200,200);
// ctx.lineTo(400,0);
// ctx.strokeStyle="gray";
// ctx.stroke();
// function getRandomHex(){
//     return Math.random()*255;
// }
//
// for(let i = 0;i<219;i++){
//     let red = getRandomHex();
//     let green = getRandomHex();
//     let blue = getRandomHex();
//     ctx.strokeStyle=`rgb(${red},${green},${blue})`;
//     let x = Math.random()*window.innerWidth;
//     let y = Math.random()*window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x,y,50,0 ,Math.PI*2);
//     ctx.stroke();
// }
function randomColor(){
    let red= Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    return `${red},${green},${blue}`;
}



let mouseX = undefined;
let mouseY = undefined;

addEventListener("mousemove",function(event){
    mouseX = event.x;
    mouseY = event.y;
})

let minRadius = 3;
let maxRadius = 60;

class Circle{
    x;
    y;
    xVelocity;
    yVelocity;
    radius;
    color;
    minRadius;

    constructor(x,y,xVelocity,yVelocity,radius){
        this.x = x;
        this.y = y;
        this.xVelocity = xVelocity;
        this.yVelocity= yVelocity;
        this.radius = radius;
        this.color = `rgb(${randomColor()})`;
        this.minRadius = radius;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();

    }
    update() {
        this.draw();
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.xVelocity=-this.xVelocity;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.yVelocity=-this.yVelocity;
        }
        this.y+=this.yVelocity;
        this.x+=this.xVelocity;
        if(this.x-mouseX<30 && this.x -mouseX>-30 && this.y-mouseY>-30 && this.y-mouseY<30){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }else if(this.x-mouseX>30 || this.x -mouseX<-30 || this.y-mouseY<-30 ||this.y-mouseY>30){
            if(this.radius>this.minRadius){
                this.radius-=1;
            }
        }
        ctx.fillStyle = "black";
    }
}

let circleArray = [];
for(let i =0; i<500;i++){
    let radius = Math.random()*(6-1) +1;
    let x = Math.random()*(innerWidth-radius*2)+radius;
    let y = Math.random()*(innerHeight-radius*2)+radius;
    let xVelocity = (Math.random()-0.5);
    let yVelocity = (Math.random()-0.5);
    let circle = new Circle(x,y,xVelocity,yVelocity,radius);
    circleArray.push(circle);
}


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    // co the dung fillRect voi fillStyle ="white" cung duoc :))
    for(let j =0; j<circleArray.length;j++){
        circleArray[j].update();
    }
}

animate();

