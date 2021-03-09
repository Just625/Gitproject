//Tách ra 4 functions
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
addBtn.addEventListener("click",function(){
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value;
    inputOne= parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    let result = inputOne + inputTwo;
    document.getElementById("showResult").innerText="Result Addition :"+ result;
})
subBtn.addEventListener("click",function(){
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value
    inputOne= parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    let result = inputOne - inputTwo;
    document.getElementById("showResult").innerText="Result Subtraction :"+ result;
})
mulBtn.addEventListener("click",function(){
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value
    inputOne= parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    let result = inputOne * inputTwo;
    document.getElementById("showResult").innerText="Result Multiplication :"+ result;
})
divBtn.addEventListener("click",function(){
    let inputOne = document.getElementById("inputOne").value;
    let inputTwo = document.getElementById("inputTwo").value
    inputOne= parseInt(inputOne);
    inputTwo = parseInt(inputTwo);
    if (inputTwo !=0){
        let result = inputOne / inputTwo;
        document.getElementById("showResult").innerText="Result Division :"+ result;
    } else{
        document.getElementById("showResult").innerText="Number two can't be zero when performing division"}

})