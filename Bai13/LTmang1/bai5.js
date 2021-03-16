let number = "Hello WOrld"
let count = 0;
for(let i =0; i<number.length;i++){
    if(number[i].toLowerCase()=="a"|| number[i].toLowerCase()=="e"|| number[i].toLowerCase()=="i"|| number[i].toLowerCase()=="o"|| number[i].toLowerCase()=="u"){
        count++;
    }
}
document.getElementById("showResult").innerHTML = `Co tat ca ${count} nguyen am`;
