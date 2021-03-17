function checkInside(array,number){
    let count = 0;
    for(let i = 0; i<array.length;i++){
        if(array[i]==number){
            count++
    }}
    if(count ==0){
        return -1
    }else{
        return count;
    }
}

console.log(checkInside([1,2,3,1,2],2));
console.log(checkInside(["a",2,"a",1,2],"a"));
console.log(checkInside([1,"a",3,1,2],"b"));

