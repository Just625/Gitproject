function Rectangle (dai, rong){
    this.dai = dai;
    this.rong = rong;
    this.tinhDienTich = function(){
        return this.dai*this.rong;
    };
    this.tinhChuVi = function(){
        return this.dai+this.rong;
    };
    this.drawRec = function(){
        let ctx = document.getElementById("myCanvas").getContext("2d");

        ctx.moveTo(0,0);
        ctx.lineTo(this.rong,0);
        ctx.lineTo(this.rong,this.dai);
        ctx.lineTo(0,this.dai);
        ctx.lineTo(0,0);
        ctx.stroke();
    };
    this.setDaiRong = function(dai2,rong2){
        this.dai = dai2;
        this.rong = rong2;
    };
}
let rec1 = new Rectangle(50,80);
rec1.drawRec();
console.log(rec1);
rec1.setDaiRong(100,150);
console.log(rec1);

rec1.drawRec();
let dienTich = rec1.tinhDienTich();
let chuVi = rec1.tinhChuVi()
document.getElementById("showResult").innerHTML = `Dien tich: ${dienTich}, chu vi: ${chuVi}`




