let a = parseFloat(prompt("Nhập vào số a: "));
let b = parseFloat(prompt("Nhập vào số b: "));
let c = parseFloat(prompt("Nhập vào số c: "));
let nghiem;
let delta;
if (a === 0){
    nghiem = -c/b;
    alert(`Phuong trinh co 1 nghiem: ${nghiem}`);
} else{
    delta = b*b - 4 * a *c;
    if( delta  >0){
        let nghiem1 = (-b + Math.sqrt(delta))/(2*a);
        let nghiem2 = (-b - Math.sqrt(delta))/(2*a);
        alert(`Phuong trinh co 2 nghiem: ${nghiem1} va ${nghiem2}`);
    } else if(delta === 0){
        nghiem = -b/(2*a);
        alert(`Phuong trinh co nghiem kep ${nghiem}`);
    } else{
        alert("Phuong trinh vo nghiem");
    }
}
