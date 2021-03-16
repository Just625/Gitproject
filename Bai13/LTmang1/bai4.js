let array =[-1,2,5,12,23,12,25,64,123,15];
console.log(array);
    for(let i =0;i<array.length/2-1;i++){
        let firstNumb = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = firstNumb;
    }
    console.log(array);

