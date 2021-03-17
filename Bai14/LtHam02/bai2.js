function tinhDienTich(banKinh){
    let dienTich = banKinh * banKinh * Math.PI;
    return dienTich
}
function tinhChuVi(banKinh){
    let chuVi = 2 * banKinh * Math.PI;
    return chuVi
}

console.log(tinhChuVi(5));
console.log(tinhDienTich(5));
