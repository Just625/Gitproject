let firstNumb = 0;
let secondNumb = 1;
let value =`20 so fibonacci dau tien la: ${firstNumb}`
for (let i =0;i<19;i++){
    let thirdNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = thirdNumb;
    value = value +", "+ thirdNumb;
}
document.getElementById("showResult").innerHTML = value;





