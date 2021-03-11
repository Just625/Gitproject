let soVon = parseInt(prompt("Nhap so tien ban dau: "));
let soThangVay = parseInt(prompt("Nhap so thang cho vay: "));
let laiSuat = parseFloat(prompt("Nhap lai suat: "));
let soTienNhan = soVon * (1+laiSuat)**soThangVay;
alert(`So tien nhan duoc: ${soTienNhan}`);