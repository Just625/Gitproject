function plusOne(number){
    let plusNumber = number + 1;
    return plusNumber;
}
function onLoad(){
    let number = parseFloat(prompt("enter a number: "));
    let showResult = plusOne(number);
    document.getElementById("showResult").innerHTML = showResult;
}