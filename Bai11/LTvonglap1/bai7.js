let value= " "

for(let i =1;i<101;i++){
    if(i%3==0&&i%5==0){
        value +=", "+"FizzBuzz";
    }else if(i%3==0){
        value +=", "+ "Fizz";
    }else if(i%5==0){
        value +=", "+ "Buzz";
    }else{
        value +=", "+ i;
    }
}
document.getElementById("showResult").innerHTML=value;