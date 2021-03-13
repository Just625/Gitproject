let numb = parseInt(prompt("Nhập vào số nguyên dương cần tính gt: "));
let result=1;
if(numb >0){
    for(let i =1; i<numb+1;i++){
        result *= i;
    }
} else{
    alert("Nhập lại số theo đúng yêu cầu.")
}
document.getElementById("showResult").innerText = `Giai thừa của ${numb} là ${result}`;