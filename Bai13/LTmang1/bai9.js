let arrayA =[1,2,3,4,5,6,7,8,9,10];
let arrayB =[11,12,13,14,15,16,17,18,19,20];
let arrayC =new Array(20);
let strA = arrayA.join();
let strB = arrayB.join();
let strC = strB + ","+strA;
console.log(strC);
arrayC = strC.split(",");
console.log(arrayC);