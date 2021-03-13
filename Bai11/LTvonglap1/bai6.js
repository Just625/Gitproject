let count = 0;
let total =0;
let numb = 0;
while(count<30){
    if(numb%7==0){
        count+=1;
        total+=numb;
    }
    numb+=1;
}
document.getElementById("showResult").innerHTML=`Tong 30 so tu nhien dau tien chia het cho 7 la: ${total}`