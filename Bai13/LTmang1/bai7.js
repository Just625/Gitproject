let array =[-1,2,5,12,23,12,25,64,123,15];
let V = 5;
console.log(array);
for(let i =0; i<array.length;i++){
    if(array[i]==V){
        for(let j = i; j<array.length-i-1;j++){
            array[j]=array[j+1];
        }
        array[array.length-1]=0;
    }
}
console.log(array);

