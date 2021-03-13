let value =""
for(let i=0;i<7;i++){
    for(let j=0;j<21;j++){
        if(i==0 || i ==6 || j==0 || j==20 ){
            value += "*";
        }else{
            value += "&nbsp;&nbsp;"
        }
    }
    value += "<br/>";
}

document.getElementById("showResult").innerHTML= value;