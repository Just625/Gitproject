function Temperature(degree){
    this.degree = degree;
    this.convertToF = function(){
        return (this.degree*1.8) +32
    };
    this.convertToK = function(){
        return this.degree+273.15
    }
};
let temperature = new Temperature(25);
let tempToF = temperature.convertToF();
let tempToK = temperature.convertToK();
document.getElementById("showResult").innerHTML = `Do F tuong ung: ${tempToF} <br/> Do K tuong ung: ${tempToK}`