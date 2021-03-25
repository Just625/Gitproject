function Apple(){
    this.weight = 10;
    this.decrease = function(){
        this.weight--;
    };
    this.isEmpty = function(){
        if(this.weight>0){
            return true;
        }else{
            return false;
        }
    };
    this.getWeight = function(){
        return this.weight;
    }
}
function Human(){
    this.name;
    this.gender;
    this.weight;
    this.isMale = function(){
        if(this.gender){
            return true;
        }else{
            return false;
        }
    };
    this.setGender = function(boolean){
        this.gender = boolean;
    };
    this.checkApple = function(apple){
        console.log(apple.getWeight());
        return apple.isEmpty();
    };
    this.eat = function(apple){
        if(apple.getWeight()>0){
            this.weight++;
            apple.decrease();
        }else{
            console.log("Het táo rồi. Ăn lắm ăn lốn!")
        }
    }
    this.say = function(str){
        console.log(str);
    };
    this.getName = function(){
        return this.name;
    };
    this.setName = function(name){
        this.name = name;
    };
    this.getWeight = function(){
        return this.weight;
    };
    this.setWeight = function(weight){
        this.weight = weight;
    }
}

let apple1 = new Apple();
console.log(apple1);
let firstHuman = new Human();
firstHuman.setName("Adam")
firstHuman.setGender(true);
firstHuman.setWeight(70);
firstHuman.say(`Hi! I am ${firstHuman.getName()}. My weight is ${firstHuman.getWeight()}`);
let secondHuman = new Human();
secondHuman.setName("Eve")
secondHuman.setGender(false);
secondHuman.setWeight(48);
secondHuman.say(`Hi! I am ${secondHuman.getName()}. My weight is ${secondHuman.getWeight()}`);

for(let i=0; i<5;i++){
    firstHuman.eat(apple1);
    console.log(firstHuman.getWeight())
    secondHuman.eat(apple1);
    console.log(secondHuman.getWeight())
}
firstHuman.eat(apple1);
secondHuman.eat(apple1);





