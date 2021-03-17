function reverseArray(array){
    let reverse = [];
    for(let i =0; i<array.length;i++){
        reverse.unshift(array[i])
    }
    return reverse;
}

console.log(reverseArray([1,2,3,"a"]));