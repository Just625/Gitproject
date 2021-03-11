let a = parseFloat(prompt("Nhap vao so a: "));
let b = parseFloat(prompt("Nhap vao so b: "));
if(a===0){
    if(b===0){
        alert("Phuong trinh co vo so nghiem")
    }else{
        alert("Phuong trinh vo nghiem");
    }
}else {
    let nghiem = -b/a;
    alert(`Nghiem cua phuong trinh la: ${nghiem}`);
}