function checkCondition(){
    // let lastRandNumb = null;
    let randNumb = (Math.floor(Math.random()*3) +1);
    // if (lastRandNumb == null){
    //     lastRandNumb = randNumb;
    // } else if(lastRandNumb == randNumb){
    //     randNumb = (Math.floor(Math.random()*3) +1);
    //     lastRandNumb = randNumb;
    // }
    if (btn1.checked && btn2.checked&& btn3.checked){
        if (randNumb == 1){
            btn1.checked = false;
        }else if (randNumb ==2){
            btn2.checked = false;
        } else{
            btn3.checked = false;
        }
    }
}
// let allChecked = btn1.checked && btn2.checked&& btn3.checked;
//Nen lam ham kiem tra cho tung dk
let btn1= document.getElementById("btn1");
btn1.addEventListener("click",function(){
  checkCondition();
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click",function(){
    checkCondition();
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click",function(){
    checkCondition();
})


