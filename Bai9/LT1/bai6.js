let doanhSoBH = parseInt((prompt("Nhập doanh số bán hàng: ")));
let hoaHong ;
let soTienNhanDuoc;
if(doanhSoBH<0){
    alert("Không phát sinh doanh số nen khong co hoa hong");
} else{
    if(doanhSoBH <5000000 &&doanhSoBH>0){
        hoaHong = 0.01;
        soTienNhanDuoc = doanhSoBH * hoaHong;
        alert(`Số tien hoa hồng nhận được là ${soTienNhanDuoc}`);
    }else if(doanhSoBH <10000000){
        hoaHong = 0.05;
        soTienNhanDuoc = doanhSoBH * hoaHong;
        alert(`Số tien hoa hồng nhận được là ${soTienNhanDuoc}`);
    } else if(doanhSoBH<20000000){
        hoaHong = 0.08;
        soTienNhanDuoc = doanhSoBH * hoaHong;
        alert(`Số tien hoa hồng nhận được là ${soTienNhanDuoc}`);
    }else {
        hoaHong = 0.1;
        soTienNhanDuoc = doanhSoBH*hoaHong
        alert(`Số tien hoa hồng nhận được là ${soTienNhanDuoc}`);
    }

}
