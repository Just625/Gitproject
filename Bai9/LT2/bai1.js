document.getElementById("btn").addEventListener("click",function(){
    let inputData = document.getElementById("inputData").value;
    let degree = parseInt(inputData)*9/5 +32;
    document.getElementById("showResult").innerHTML = degree;
})

