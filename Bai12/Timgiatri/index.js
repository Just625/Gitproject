let value = prompt("Enter a number: ");
let arr = [-3, 5, 1, 3, 2, 10];
arr.forEach(function(item,index){
    console.log(item);
    if(item ==value){
        document.getElementById("showResult").innerHTML= `So do nam o vi tri thu ${index} cua mang`;
    }
}
)
