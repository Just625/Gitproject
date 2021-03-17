function convertTemp(temp){
    let cDegree;
    cDegree = (temp-31)/ 1.8;
    return cDegree;
}
document.getElementById("inputData").addEventListener("change",function(){
    let temp = document.getElementById("inputData").value;
    let outputData = convertTemp(temp);
    document.getElementById("showResult").innerHTML = outputData;
})


