let canvas = document.getElementById("myCanvas");
canvas.width = 1000;
canvas.height = 600;
let ctx = canvas.getContext("2d");
class Car{
    x;
    y;
    height;
    width;
    speed;
    constructor(x,y,width,height,speed){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
    }
    drawCar(){
        let img = new Image();
        img.src = 'car.png';
        // img.onload = function(){
        //     ctx.drawImage(img, this.x,this.y,50,50);
        // }
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }
    moveDown(){
        if(this.y+this.height<canvas.height){
            this.y+=this.speed;
        }
    }
    moveUp(){
        this.y-=this.speed;
    }
    moveLeft(){
        this.x-=this.speed;
    }
    moveRight(){
        this.x+=this.speed;
    }
    speedUp(){
        this.speed+=2;
    }
}

let car = new Car(canvas.width/2-50,canvas.height-50,50,50,1);
car.drawCar();

addEventListener("keydown",function(event){
    switch (event.keyCode){
        case 17:
            car.speedUp();
            break;
        case 37:
            car.moveLeft();
            break;
        case 38:
            car.moveUp();
            break;
        case 39:
            car.moveRight();
            break;
        case 40:
            car.moveDown();
            break;
    }
});

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    car.moveUp();
    car.drawCar();
}
animate();
