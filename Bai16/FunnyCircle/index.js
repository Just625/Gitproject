function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red +","+green+","+blue+")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let color = getRandomColor();
    // for(let j =0;j<2;j++){
        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;
        let circle = new Circle(x, y, radius);
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    // }
}
function createMultiCircle(){
    for(let i =0; i<30;i++){
        createCircle();
    }
}

createMultiCircle();

