let value = "<table>";
for(let i=1;i<10;i++){
    value = value + "<tr>"
    for(let j=2;j<10;j++){
        value = value + `<td>${j}x${i}=${j*i}</td>`
    }
    value = value +"</tr>"
}
document.getElementById("showResult").innerHTML = value;