let i = 1;
let stringInsideDiv

while(i<101){
    stringInsideDiv += `<hr style="width:${i}%;text-align: center;"> <br/>`
    i++
}
document.getElementById("showResult").innerHTML=stringInsideDiv;
