let numbers =[-3, 5, 1, 3, 2, 10];
let max = numbers[0];
numbers.forEach(function(item){
    if(item > max){
        max = item;
    }
    document.getElementById("showResult").innerHTML=`So lon nhat trong mang  la ${item}`;
})