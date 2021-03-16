let array =[-1,2,5,12,23,12,25,64,123,15];
let maxNumber= array[0];
let total = 0;
let avgNumber;
for(let i = 0;i<array.length;i++){
    if(array[i]>maxNumber){
       maxNumber = array[i];
    }
    total+=array[i];
}
avgNumber = total/array.length;
document.getElementById("showResult").innerHTML = `Gia tri lon nhat la ${maxNumber} <br/> gia tri trung binh la ${avgNumber}`;