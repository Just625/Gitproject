function checkNumber(value){
    let number = [0,1,2,3,4,5,6,7,8,9]
    let count2 = 0;
    for(let i = 0; i<value.length;i++){
        let count1 = 0;
        for(let j =0; j<number.length;j++){
            if(value[i]==number[j]){
                count1++;
            }
        }
        if(count1==0){
            return false
        }else{
            count2++;
        }
    }
    if(count2==value.length){
        return true
    }else{
        return false;
    }
}

console.log(checkNumber("aa "));
console.log(checkNumber("a5 a"));
console.log(checkNumber("5a"));
console.log(checkNumber("5"));
console.log(checkNumber("563"));