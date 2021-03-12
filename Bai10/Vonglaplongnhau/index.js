let value="<table border ='1' width='300' cellspacing='0' cellpadding='3'>";
for(let k = 1; k<11;k++){
    value = value +"<tr>"
    for(let i =1; i<11;i++){
        value = value + `<td>${(i*k)}</td>`;
    }
    value = value+ "</tr>";
}
value = value + "</table>"
document.getElementById("showResult").innerHTML = value;
