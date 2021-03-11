let soDung = parseInt(prompt("Nhập số dung lượng đien thoại trong tháng"));
let heSo;
let soTienTra;
if(soDung<0){
    alert("Vui lòng nhập lại số cước");
} else{
    if (soDung < 50){
        heSo = 5;
        soTienTra = soDung * heSo;
        alert(`Số cước đien thoại phải trả trong tháng: ${soTienTra}`);
    }else if(soDung<100){
        heSo = 10;
        soTienTra = soDung * heSo;
        alert(`Số cước đien thoại phải trả trong tháng: ${soTienTra}`);
    } else{
        heSo = 15;
        soTienTra = soDung * heSo;
        alert(`Số cước đien thoại phải trả trong tháng: ${soTienTra}`);
    }
}