
let btn = document.getElementById("btn");
let showResult = document.getElementById("showResult");
btn.addEventListener("click",function(){
    let inputData = + document.getElementById("inputData").value;
    if (inputData > 0 && inputData < 13){
        switch(inputData){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                showResult.innerHTML ="Tháng " + inputData + " có 31 ngày";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                showResult.innerHTML = "Tháng "+ inputData +" có 30 ngày";
                break;
            case 2:
                showResult.innerHTML ="Tháng 2 có 28 hoặc 29 ngày"
                break;
            default:
        }
    } else{
        showResult.innerHTML="Hãy nhập số trong khoảng từ 1 đen 12"
    }
})
