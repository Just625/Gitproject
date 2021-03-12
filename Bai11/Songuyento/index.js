let soCanIn = parseInt(prompt("Nhap so nguyen to muon hien thi: "))
let soDaIn = 0;
let showResult =`${soCanIn} so nguyen to dau tien la: `
let numb = 2;
while(soDaIn <soCanIn){
    let soUocSo = 0;
    for(let i =2; i<numb;i++){
        if(numb%i==0){
            soUocSo = soUocSo + 1;
        }
    }
    if(soUocSo ==0){
        soDaIn = soDaIn + 1;
        showResult = showResult +" " + numb;
    }
    numb++;
}
document.getElementById("showResult").innerHTML = showResult;
