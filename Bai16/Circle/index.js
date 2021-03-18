let Circle = function(radius){
    this.radius = radius;
    this.getRadius = function(){
        return this.radius;
    };
    this.getArea = function(){
        return Math.PI*this.radius*this.radius;
    }
}

let circle = new Circle(2);
let radius = circle.getRadius();
let area = circle.getArea();

alert('radius:'+radius+" "+'area:'+area);
let circle2 = new Circle(3);
let radius2 = circle2.getRadius();
let area2 = circle2.getArea();

alert('radius:'+radius2+" "+'area:'+area2);