class Tivi{
    presentChannel; //string
    presentVolume;  //int
    status;         //boolean
    constructor(volume,status){
        this.presentVolume = volume;
        this.status = status;
    }
    turnOn = function(){
        this.status= true;
        console.log("Tivi is turned on")
    }
    turnOff = function(){
        this.status = false;
        console.log("Tivi is turned off");
    }
    changeChannel = function(channel){
        this.presentChannel = channel;
        return this.presentChannel;
    }
    changeVolume = function(volume){
        this.presentVolume += volume;
        return this.presentVolume;
    }
}

class Remote{
    model; //string
    constructor(model){
        this.model = model;
    }
    changeChannel (tivi, channel){
        tivi.presentChannel=channel;
        return tivi.presentChannel;
    }
    changeVolume = function(tivi, volume){
        tivi.presentVolume = volume;
        return tivi.presentVolume;
    }
    turnOffTivi = function(tivi){
        tivi.turnOff();
    }
}


let tivi1 = new Tivi(0,false);
let remote1 = new Remote("abc");
tivi1.turnOn();
console.log(tivi1.changeChannel(7));
console.log(remote1.changeChannel(tivi1,3));
console.log(tivi1.presentChannel);
console.log(tivi1.changeVolume(2));
remote1.turnOffTivi(tivi1);


