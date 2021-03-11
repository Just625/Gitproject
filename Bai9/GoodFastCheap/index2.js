
//Nen lam ham kiem tra cho tung dk
let btn1= document.getElementById("btn1");
btn1.addEventListener("click",function(){
    let allChecked = btn1.checked && btn2.checked&& btn3.checked;
    let randNumb = (Math.floor(Math.random()*2) +1);
    if(allChecked){
        if(randNumb==1){
            btn2.checked = false;
        } else{
            btn3.checked = false;
        }
    }
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    let allChecked = btn1.checked && btn2.checked&& btn3.checked;
    let randNumb = (Math.floor(Math.random()*2) +1);
    if(allChecked){
        if(randNumb==1){
            btn1.checked = false;
        } else{
            btn3.checked = false;
        }
    }
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){
    let allChecked = btn1.checked && btn2.checked&& btn3.checked;
    let randNumb = (Math.floor(Math.random()*2) +1);
    if(allChecked){
        if(randNumb==1){
            btn1.checked = false;
        } else{
            btn2.checked = false;
        }
    }
})


