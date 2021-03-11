let a = parseInt(prompt("Nhập vào số a: "));
let b = parseInt(prompt("Nhập vào số b: "));
if (b!=0){
    if (a%b==0){
        alert(`${a} chia het cho ${b}`);
    } else{
        alert(`${a} không chia het cho  ${b}`);
    }
}else{
    alert("Vui lòng nhập số b khác 0");
}
