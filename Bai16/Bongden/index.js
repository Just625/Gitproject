class ElectricLamp{
    status;
    constructor(status){
        this.status = status;
    }
    turnOff = function(){
        this.status = false;
        console.log("Den da duoc tat")
    }
    turnOn = function(){
        this.status = true;
        console.log("Den da duoc bat")
    }
}

class SwitchButton{
    status;
    lamp;
    constructor(status,lamp) {
        this.status = status;
        this.lamp = lamp;
    }
    connectToLamp = function(electricLamp){
        this.lamp  = electricLamp;
    }
    switchOff = function(){
        this.status = false;
        this.lamp.turnOff();
    }
    switchOn = function(){
        this.status = true;
        this.lamp.turnOn();
    }
}

let electricLamp = new ElectricLamp();
let switchButton = new SwitchButton(false,electricLamp);
console.log(switchButton);
switchButton.connectToLamp(electricLamp2);
for(let i = 0; i<10;i++){
    switchButton.switchOn();
    switchButton.switchOff();
}

