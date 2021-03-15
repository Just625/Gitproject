let engDic = ["happy", "sad", "angry", "depress"];
let vietDic =["hanh phuc", "buon ba", "gian du", "tr4m k4m"];
document.getElementById("btn").addEventListener("click",function(){
    let inputData = document.getElementById("inputData").value;
    console.log(inputData);
    for(let i=0;i<engDic.length;i++){
        console.log(engDic[i]);
        if(inputData == engDic[i]){
            document.getElementById("outputData").value=`${vietDic[i]}`;
            break;
        }
        document.getElementById("outputData").value="Khong tim thay";
    }

})