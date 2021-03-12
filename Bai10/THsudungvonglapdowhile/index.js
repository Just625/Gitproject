let numb = parseFloat(prompt("Nhap vao so tu 1 -> 10"));
if( numb >=1 && numb <=10){
    do{
        alert(`So ban vua nhap la: ${numb}`);
        numb = parseFloat(prompt("Nhap vao so tu 1 ->10"));
    } while(numb >=1 && numb<=10);
}

