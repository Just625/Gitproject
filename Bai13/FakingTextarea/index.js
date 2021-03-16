let array = ["I"," a","m"," a","n"," i","d","i","o","t"," s","a","n","d","w","i","c","h","!","!"];
let value= "";
let i = 0;
document.getElementById("outputData").addEventListener("keyup",function(event){
    if(i>array.length-1){
        i=0;
        value="";
    }
    document.getElementById("outputData").value="";
    value+=array[i];
    i++
    document.getElementById("outputData").value=value;
    console.log(array[i]);
})



