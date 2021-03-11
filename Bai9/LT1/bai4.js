let firstNumb = parseInt(prompt("Nhập vào số nguyen thứ nhất"));
let secondNumb = parseInt(prompt("Nhập vào số nguyen thứ hai"));
let thirdNumb = parseInt(prompt("Nhập vào số nguyen thứ ba"));
let max = firstNumb;
if(max<secondNumb){
    max = secondNumb;
}
if(max<thirdNumb){
    max = thirdNumb;
}
alert(`${max} là số lớn nhất`);