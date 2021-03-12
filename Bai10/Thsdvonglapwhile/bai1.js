let numb = parseFloat(prompt("Nhap vao 1 so:"));
console.log(numb);
let total = numb;
// debugger
while (numb != -1){
    numb = parseFloat(prompt("Nhap vao 1 so: "));
    console.log(numb);
    total = total + numb;
}
console.log(total);


