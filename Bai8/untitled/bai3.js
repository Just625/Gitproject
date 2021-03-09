let num = parseInt(prompt("Nhập vào 1 số: ",0));
// Su dung if else if
/*if (num>0){
    alert(1);
} else if (num <0){
    alert(-1);
} else{
    alert(0);
}*/

//Su dung switch case
switch (true){
    case num == 0:
        alert(0);
        break;
    case num <0:
        alert(-1);
        break;
    case num >0:
        alert(1)
        break;
}