let tienGoc = parseFloat(prompt("Nhập số tiền gốc: "))
let laiSuat = parseFloat(prompt("Nhập lãi suất (vd: 0.2): "))
let thangVay = parseFloat(prompt("Nhập số tháng vay: "))
let tienCuoi = tienGoc*(laiSuat +1);
for (let i =0; i< thangVay-1; i++){
    tienCuoi *= (laiSuat+1);
}
document.getElementById("showResult").innerHTML=`Số tiền cuối cùng là: ${tienCuoi}`;