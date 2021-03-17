function getMin(array){
    if(array.length==0){
        return -1
    }
    let minArray = array[0];
    let minArrayIndex = 0;
    for(let i = 0;i<array.length;i++){
        if(array[i]<minArray){
            minArray=array[i];
            minArrayIndex=i;
        }
    }
    return minArrayIndex
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let minArr1 = getMin(arr1);
console.log(`Phan tu nho nhat nam o vi tri ${minArr1}`)
let arr2= [7, 12, 6, 9, 20, 56, 89]
let minArr2 = getMin(arr2);
console.log(`Phan tu nho nhat nam o vi tri ${minArr2}`)
let arr3= [];
let minArr3 = getMin(arr3);
console.log(`Phan tu nho nhat nam o vi tri ${minArr3}`)
let arr4 = [0, 0, 0, 0, 0, 0];
let minArr4 = getMin(arr4);
console.log(`Phan tu nho nhat nam o vi tri ${minArr4}`);