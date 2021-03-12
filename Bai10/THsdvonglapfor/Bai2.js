let total = 0;
let numb = parseFloat(prompt("Nhap vao 1 so bat ky lon hon 0: "));
if( numb>0){
    for (let i =1; i<numb; i++){
        total += i;
    }
    console.log(`Tong cac phan tu la: ${total}`);
}else{
    console.log("Wrong number input")
}

