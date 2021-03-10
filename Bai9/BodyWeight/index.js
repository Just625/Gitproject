let bodyWeight = +(prompt("Enter your weight in kg: "));
let height = +prompt("Enter your height in m: ");
let bmi = bodyWeight/(height * height);
if (bmi < 18.5){
    alert("Underweight");
} else if (bmi <25.0){
    alert("Normal");
} else if (bmi <30.0){
    alert("Overweight");
} else{
    alert("Obese");
}
// console.log(bodyWeight);
// console.log(height);
// console.log(bmi);