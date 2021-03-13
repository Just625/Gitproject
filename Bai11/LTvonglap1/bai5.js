let firstNumb = 0;
let secondNumb = 1;
let total = 0;
for (let i =0;i<20;i++){
    let thirdNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = thirdNumb;
    total = total + thirdNumb;
}
document.getElementById("showResult").innerHTML = `Tong cua 20 so fibonancci dau tien la: ${total}`





