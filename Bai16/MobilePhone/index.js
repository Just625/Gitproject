function Mobile(battery){
    this.status="On";
    this.battery = battery;
    this.pendingMess=[];
    this.incomingMess=[]
    this.sendedMess=[];
    this.turnOfOff = function(){
        if(this.status=="On"){
            this.status= "Off"
            console.log("Phone is  off");
        }else if(this.status=="Off"){
            this.status = "On"
            console.log("Phone is  on");
        }
        this.battery -=1;
    };
    this.checkTurnOnOff = function(){
        this.battery -=1;
        if(this.status=="On"){
            console.log("Phone is turned on");
        }else if (this.status=="Off"){
            console.log("Phone is turned off");
            return
        }
    };
    this.chargeBattery = function(){
        if(this.battery<100){
            for(let i = this.battery; i <101;i++){
                this.battery++
                console.log(`Phone battery is ${this.battery}%`)
            }
            console.log("Phone is fully charged");
        }else if(this.battery==100){
            console.log("Phone battery is full");
        }
    };
    this.writeMess = function(mess){
        if(this.status == "On"){
            this.pendingMess.push(mess);
            this.battery -=1;
            console.log(this.pendingMess);
        } else {
            console.log("You need to turn on the phone first");
        }
    };
    this.receiveMess = function(mobile){
        if(this.status == "On"){
            this.incomingMess.push(mobile.SendedMess);
            this.battery -=1;
            console.log(this.incomingMess);
        } else {
            console.log("You need to turn on the phone first");
        }

    };
    this.sendMess = function(mobile){
        if(this.status == "On"){
            if(this.pendingMess==[]){
                console.log("There is no pending message to send");
            } else{
                mobile.incomingMess = this.pendingMess;
                this.sendedMess = this.pendingMess;
                this.pendingMess = [];
                console.log("Messaged sended")
            }
            this.battery -=1;
        } else {
            console.log("You need to turn on the phone first");
        }
    };
    this.seeIncomingMess = function(){
        if(this.status == "On"){
            if(this.incomingMess ==[]){
                console.log("There is no message from other phone");
            }else{
                for(let j = 0;j<this.incomingMess.length;j++){
                    console.log(`Mess ${j+1} is ${this.incomingMess[j]}`)
                }
            }
            this.battery -=1;
        } else {
            console.log("You need to turn on the phone first");
        }

    };
    this.seeSendedMess = function(){
        if(this.status=="On"){
            if(this.sendedMess==[]){
                console.log("There is no sended message");
            }else{
                for(let k =0; k<this.sendedMess.length;k++){
                    console.log(`Message ${k+1}: ${this.sendedMess[k]}, `)
                }
            }
            this.battery -=1;
        } else{
            console.log("You need to turn on the phone first");
        }
    }
}
let iphone = new Mobile(100);
let nokia = new Mobile(100);
nokia.writeMess("Noelle");
nokia.sendMess(iphone);
nokia.seeSendedMess();
console.log(iphone.incomingMess)
iphone.seeIncomingMess();

