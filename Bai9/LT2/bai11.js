let numb = parseInt(prompt("Nhap vao thu nhap tinh thue TNCN: "));
let thueSuat;
let soTienNop;
if(numb<0 ){
    alert("Hay nhap lai thu nhap tinh thue TNCN");
} else{
    if( numb <=5000000 ){
        thueSuat = 0.05;
        soTienNop = numb * thueSuat;
    }else if(numb <= 10000000){
       thueSuat = 0.1;
       soTienNop = 5000000*0.05 + (numb -5000000) * thueSuat;
    }else if(numb <=18000000){
        thueSuat = 0.15;
        soTienNop = 5000000*0.05 + 5000000*0.1 + (numb-10000000)*thueSuat;
    }else{
        thueSuat = 0.2;
        soTienNop =  5000000*0.05 + 5000000*0.1 + 8000000*0.15 + (numb -18000000)*thueSuat;
    }
    alert(`So tien phai nop la: ${soTienNop}`)
}