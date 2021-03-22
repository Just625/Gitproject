function Battery(){
    this.setEnergy = function(energy){
        this.energy = energy;
    };
    this.getEnergy = function (){
        return this.energy;
    };
    this.decreaseEnergy = function(){
        if(this.energy>0){
            this.energy = this.energy-1;
        }
    }
}

function FlashLamp(){
    this.setBattery= function(battery){
        this.battery = battery;
    };
    this.getBatteryInfo= function(){
        return this.battery.getEnergy();
    };
    this.light = function(){
        if(this.status){
            alert("Lighting");
        }else {
            alert("Not lighting");
        }
    };
    this.turnOn = function(){
        this.status = true;
    };
    this.turnOff = function(){
        this.status = false;
    }
}
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
console.log(flashLamp);
console.log(flashLamp.getBatteryInfo());
flashLamp.light();
flashLamp.turnOn();
console.log(flashLamp.status);
flashLamp.light();
battery.decreaseEnergy();
console.log(battery.getEnergy());
flashLamp.turnOff();
flashLamp.light();