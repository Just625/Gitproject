function getMinNumber(first, second, third){
    let minNumber = first;
    if(minNumber>second){
        minNumber = second;
    }
    if(minNumber>third){
        minNumber= third;
    }
    return minNumber;
}
console.log(getMinNumber(1,2,3));
console.log(getMinNumber(1,0,3));
console.log(getMinNumber(1,2,-1));