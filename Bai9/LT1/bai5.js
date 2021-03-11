let diemKiemTra = parseInt(prompt("Nhập điem bài kiem tra: "));
let diemGiuaKy = parseInt(prompt("Nhập điem bài kiem tra giữa kỳ: "));
let diemCuoiKy = parseInt(prompt("Nhập điem bài kiem tra cuối kỳ: "));

let avgScore = (diemKiemTra + diemGiuaKy *2 + diemCuoiKy *3)/6;
if(avgScore <5){
    alert("Học lực trung bình");
} else if(avgScore <8){
    alert("Học lực khá");
} else{
    alert("Học lực giỏi");
}
