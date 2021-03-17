function isPrime(number){
    if(number<2){
        return false
    }
    let count = 0;
    for(let i =1;i<number+1;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==2){
        return true
    }
}

let value=""
for(let j =0;j<10000;j++){
    if(isPrime(j)){
        value= value + j +",";
    }
}
document.getElementById("showResult").innerHTML=value;