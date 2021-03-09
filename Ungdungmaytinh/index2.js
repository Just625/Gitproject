//Gộp vào 1 function duy nhất
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
addBtn.addEventListener("click",calculate);
subBtn.addEventListener("click",calculate);
mulBtn.addEventListener("click",calculate);
divBtn.addEventListener("click",calculate);
    function calculate(){
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value;
    inputOne= parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    if (this.id =="addBtn"){
        let result = inputOne + inputTwo;
        document.getElementById("showResult").innerText="Result Addition :"+ result;
    } else{
        if (this.id=="subBtn"){
            let result = inputOne - inputTwo;
            document.getElementById("showResult").innerText="Result Subtraction :"+ result;
        } else{
            if(this.id=="mulBtn"){
                let result = inputOne * inputTwo;
                document.getElementById("showResult").innerText="Result Multiplication :"+ result;
            } else{
                if (inputTwo !=0){
                    let result = inputOne / inputTwo;
                    document.getElementById("showResult").innerText="Result Division :"+ result;
                } else{
                    document.getElementById("showResult").innerText="Number two can't be zero when performing division"}
            }
        }
    }
}
