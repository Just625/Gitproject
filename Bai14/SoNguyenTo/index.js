function isPrime(number){
    if(number<2){
        console.log(`${number} khong phai la so nguyen to`);
        return;
    }
    let count = 0;
    for(let i =1;i<number+1;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==2){
        console.log(`${number} la so nguyen to`)
    }else{
        console.log(`${number} khong phai la so nguyen to`)
    }
}
isPrime(2);
isPrime(3);
isPrime(4);
isPrime(1);
isPrime(1000);