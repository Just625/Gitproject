let firstNumb = 0;
let secondNumb =1;
let count = 0;
let thirdNumb;
while(count==0){
    thirdNumb = firstNumb + secondNumb;
    firstNumb = secondNumb;
    secondNumb = thirdNumb;
    if(thirdNumb%5==0){
        count+=1;
    }
}
document.getElementById("showResult").innerHTML = `${thirdNumb}`;
