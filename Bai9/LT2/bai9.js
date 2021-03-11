let a = parseFloat(prompt("Nhap so a: "));
let b = parseFloat(prompt("Nhap so b: "));
let c = parseFloat(prompt("Nhap so c: "));

if(a>0 && b > 0 && c>0 && a+b>c && b+c>a&&a+c>b){
    alert(`${a}, ${b}, ${c} la ba canh cua mot tam giac`);
}else{
    alert(`${a}, ${b}, ${c} khong phai la ba canh cua mot tam giac`)
}