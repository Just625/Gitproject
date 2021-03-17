let array = [ 'c', 's', 'c', '2', '6', '1' ];
let reverseArray = [];
for(let i =array.length-1; i>-1;i--){
    reverseArray.push(array[i]);
}
console.log(reverseArray.join(""));