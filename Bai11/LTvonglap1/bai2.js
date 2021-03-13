let degree = parseFloat(prompt("Nhap nhiet do hien tai: "));
while(true){
    if (degree >100){
        alert("Yeu cam giam nhiet do");
    }else if(degree <20){
        alert("Yeu cau tang nhiet do");
    }else{
        break;
    }
    degree = parseFloat(prompt("Nhap nhiet do hien tai: "));
}
