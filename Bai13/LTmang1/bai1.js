let array =[-1,2,5,12,23,12,25,64,123,15];
let count = 0;
let value ="";
for(let i =0; i<array.length;i++){
    if(array[i]>=10){
        count+=1    ;
        value+=array[i] +" "
    }
}
value= `Co ${count} so nguyen lon hon hoac bang 10: ` + value;
document.getElementById("outputData").innerHTML = value;
