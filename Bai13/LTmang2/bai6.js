let array = [ 'c', '-', 'c', '2', '6', '-',"5","d","-" ];
for(let i=0;i<array.length;i++){
    if(array[i]=="-"){
        array[i]=="_";
    }
}
console.log(array);
