let str = prompt("Nhap vao 1 chuoi: ");
let newArray=[];
for (let i =0; i< str.length;i++){
    if(str[i] == str[i].toUpperCase()){
        newArray.push(str[i].toLowerCase());
    }else{
        newArray.push(str[i].toUpperCase());
    }
}
console.log(newArray.join(''));