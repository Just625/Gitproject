let arr=[];
let addBtn = document.getElementById("btnAdd");
addBtn.addEventListener("click",function(){
    let inputData = document.getElementById("inputData");
    let inputDataValue = inputData.value;
    arr.push(inputDataValue);
    inputData.value="";
})
let displayBtn = document.getElementById("btnDisplay");
displayBtn.addEventListener("click",function(){
    let displayValue="";
    for(let i =0; i<arr.length;i++){
        displayValue+=`Element ${i} = ${arr[i]} <br/>`;
    }
    document.getElementById("showResult").innerHTML= displayValue;
})
