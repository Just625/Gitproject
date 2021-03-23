class Rat{
    name; //string
    weight; //int
    speed; //int
    status; //boolean
    constructor(name,weight,speed,status){
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    speak = function(){
        console.log(`${this.name}: Chit chit`);
    }
}

class Cat{
    name; //string
    weight; //int
    maxSpeed; //int
    ratCatchedNumber; //int
    constructor(name,weight,maxSpeed){
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.ratCatchedNumber = [];
    }
    speak = function(){
        console.log(`${this.name}: Meo meo.`);
    }
    catchRat = function(rat){
        if(this.ratCatchedNumber.length==0){
            if(this.maxSpeed>rat.speed){
                console.log(`Da bat duoc ${rat.name}`);
                this.ratCatchedNumber.push(rat);

            }else{
                console.log(`${rat.name} chay qua nhanh. Mission failed!`);
            }
        }else{
            console.log("Chi bat duoc 1 con chuot 1 lan")
        }
        return this.ratCatchedNumber;
    }
    eatRat = function(){
        if(this.ratCatchedNumber[0].status){
            this.ratCatchedNumber[0].status = false;
            this.weight += this.ratCatchedNumber[0].weight;
            this.ratCatchedNumber[0].weight = 0;
        }else{
            console.log("Chuot chet roi. Khong an nua");
            this.ratCatchedNumber = [];
        }
    }
}

let rat1 = new Rat("rat1",2,30,true);
let rat2 = new Rat("rat2",2,10,true);
let cat1 = new Cat("cat1",10,20);
// rat1.speak();
// cat1.speak();
console.log(rat2.status)
console.log(cat1.catchRat(rat1));
console.log(cat1.catchRat(rat2));
// console.log(cat1.ratCatchedNumber[0].status);
cat1.eatRat();

console.log(cat1);
console.log(rat2);
