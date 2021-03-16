let array =[-1,2,5,12,23,12,25,64,123,15];
let V = 15;
let matchCase = 0;
for(let i =0; i<array.length;i++){
    if(array[i]==V){
        matchCase += 1;
    }
}
if (matchCase >0){
    document.getElementById("showResult").innerHTML=`${V} is in the array`
}else{
    document.getElementById("showResult").innerHTML=`${V} is not in the array`
}
