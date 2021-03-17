let array = [ 'c', 's', 'c', '2', '6', '1',"5","d","4" ];
let count = 0;
for(let i = 0; i<array.length;i++){
    if(!isNaN(array[i])){
        count++
    }
}
console.log(count);