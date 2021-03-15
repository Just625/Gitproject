let number = prompt("Nhap vao 1 so: ");
let array = [number[0]];
// let array = number[0];
for(let i =1; i<number.length;i++){
    if((number[i]%2==0)&&(number[i-1]%2==0)){
        // array+="-" + `${number[i]}`
            array.push("-");
            array.push(number[i]);
    }else{
        // array+=`${number[i]}`;
        array.push(number[i]);
    }
}
console.log(array.join(""));


