let numb1;
let operator;
let numb2;
let outputData = document.getElementById("outputData");

function addNumb1(){

}

function eraseAll(){
    outputData.innerText = " ";
    numb1 = null;
    numb2 = null;
    operator = null;
}


function addNumb(){
    let numbClicked = document.getElementById(this.id).innerText
    numb1 = numbClicked;

}
function addOperator(){
    let operatorBtn = document.getElementById(this.id).innerText;
    operator = operatorBtn;
    console.log(operator);
}
function doCalculate(){
    if (numb1 == null|| numb2 == null|| operator == null){
        outputData.innerText = "Please insert full";
    } else{
        let result;
        numb1 = parseInt(numb1)
        numb2 = parseInt(numb2)
        switch (operator){
            case "+":
                result = numb1 + numb2;
                break;
            case "-":
                result = numb1 - numb2;
                break;
            case "/":
                result = numb1 / numb2;
                break;
            case "X":
                result = numb1 * numb2;
                break;
        }
        outputData.innerText = result;
    }

}


//Gan nut btn
document.getElementById("btn0").addEventListener("click",addNumb);
document.getElementById("btn1").addEventListener("click",addNumb);
document.getElementById("btn2").addEventListener("click",addNumb);
document.getElementById("btn3").addEventListener("click",addNumb);
document.getElementById("btn4").addEventListener("click",addNumb);
document.getElementById("btn5").addEventListener("click",addNumb);
document.getElementById("btn6").addEventListener("click",addNumb);
document.getElementById("btn7").addEventListener("click",addNumb);
document.getElementById("btn8").addEventListener("click",addNumb);
document.getElementById("btn9").addEventListener("click",addNumb);
document.getElementById("btnPlus").addEventListener("click",addOperator);
document.getElementById("btnMinus").addEventListener("click",addOperator);
document.getElementById("btnMulti").addEventListener("click",addOperator);
document.getElementById("btnDivide").addEventListener("click",addOperator);
document.getElementById("btnCalculate").addEventListener("click",doCalculate);
document.getElementById("btnC").addEventListener("click",eraseAll);

