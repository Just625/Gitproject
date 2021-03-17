function checkNguyenDuong(number){
    if(typeof (number)!="number"){
        return false;
    }else{
        if(number>0){
            return true;
        }else{
            return false;
        }
    }
}

console.log(checkNguyenDuong("a"));
console.log(checkNguyenDuong(5));
console.log(checkNguyenDuong(-1));
console.log(checkNguyenDuong(true));
console.log(checkNguyenDuong("5a"));