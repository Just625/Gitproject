let soTieuThu = parseFloat(prompt("Nhap vao so dien tieu thu: "));
let soTien;
let heSo;
if (soTieuThu <0){
    alert("So tieu thu phai lon hon 0");
} else{
    if(soTieuThu<50 ){
        heSo = 1678;
        soTien = soTieuThu * heSo;
    }else if(soTieuThu <100){
        heSo = 1734;
        soTien = 50* 1678 + (soTieuThu - 50)*heSo;
    }else if(soTieuThu<200){
        heSo = 2014;
        soTien = 50*1678 + 50 * 1734 + (soTieuThu-100)*heSo;
    }else {
        heSo = 2536;
        soTien = 50* 1678 + 50 *1734 + 100 *2014 + (soTieuThu-200)*heSo;
    }
    alert(`So tien phai tra trong thang: ${soTien}`)
}