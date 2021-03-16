let array =[-1,2,5,12,23,12,25,64,123,15];
let maxNumber = array[0];
let maxNumberIndex="";
for(let i =0; i<array.length;i++){
    if(array[i] >maxNumber){
        maxNumber = array[i]
        maxNumberIndex = i;
    }
}
document.getElementById("showResult").innerHTML=`Phan tu co gia tri lon nhat la ${maxNumber} voi vi tri la ${maxNumberIndex}`