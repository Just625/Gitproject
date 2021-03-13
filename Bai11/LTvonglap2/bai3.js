let sao;
let khoangTrong;
let result = " ";
function inKetQua(thuTuIn) {
    if (thuTuIn == "trước") {
        for (let j = 1; j < sao + 1; j++) {
            result += "*";
        }
        for (let k = 1; k < khoangTrong + 1; k++) {
            result += "&nbsp;&nbsp;";
        }
    } else if (thuTuIn == "sau") {
        for (let k = 1; k < khoangTrong + 1; k++) {
            result += "&nbsp;&nbsp;";
        }
        for (let j = 1; j < sao + 1; j++) {
            result += "*";

        }
    }
    result += "<br/>";
}

function inManHinh(soDong,soCot,cachIn,thuTuIn){
    if (cachIn=="tăng dần"){
        for(let i = 1; i <soDong+1;i++){
            sao = i;
            khoangTrong = soCot-sao;
            inKetQua(thuTuIn);
        }
    }else if(cachIn=="giảm dần"){
        for(let i = 1; i <soDong+1;i++){
            khoangTrong = i-1;
            sao = soCot-khoangTrong;
            inKetQua(thuTuIn);
        }
    }
    result += "<br/>"
}
inManHinh(5,5,"tăng dần","trước");
inManHinh(5,5,"giảm dần","trước");
inManHinh(5,5,"tăng dần","sau");
inManHinh(5,5,"giảm dần","sau");

document.getElementById("showResult").innerHTML = result;