
let inputData = prompt("Nhap vao 1 mang cac ki tu, duoc phan cach boi dau phay: ");
inputData = inputData.split(",");
let inputDataArray = [];
for(let j = 0; j<inputData.length;j++){
    inputDataArray.push(inputData[j]);
}
console.log(inputDataArray);
for(let i=0;i<inputDataArray.length;i++){
    if(inputDataArray[i] == "-"){
        inputDataArray[i] = "_";
    }
}
console.log(inputDataArray);
