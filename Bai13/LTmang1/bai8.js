let array =[-1,2,12,25,64,123,124,9821,3,-5,9821,124];
// let array = [-1,2,5,2,-1,5];
console.log("Mang ban dau: ")
console.log(array);
for(let i =0; i<array.length;i++){
    let maxNumber = array[i];
    for(let j=i;j<array.length;j++){
        if(array[j]>maxNumber){
            maxNumber = array[j];
            let middle = array[i];
            array[i] = maxNumber
            array[j]=middle;
        }
    }
}
//Co the dung thuat toan sap xep noi bot
console.log("Mang sau khi da duoc sap xep: ")
console.log(array);