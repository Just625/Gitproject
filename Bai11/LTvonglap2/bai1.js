let firstNumb = 0;
let secondNumb = 1;
let nextNumb;
let count =0;
let numbAmount = parseInt(prompt("Số lượng  số Fibonacci đầu tiên muốn in ra:"));
let showResult = "0, 1";
while(count < numbAmount-2){
    nextNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = nextNumb;
    count++;
    showResult += "," + nextNumb;
}
document.getElementById("showResult").innerHTML = showResult;
