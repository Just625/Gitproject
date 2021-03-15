let arr = [
    ["<tr>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","</tr>"],
    ["<tr>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","</tr>"],
    ["<tr>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","</tr>"],
    ["<tr>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","</tr>"],
    ["<tr>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","<td>0</td>","</tr>"],
]

function display(){
    let value ="";
    arr.forEach(function(item){
        item.forEach(function(item2){
            value+=item2;
        })
    })
    value = "<table>"+value +"</table>";
    document.getElementById("showResult").innerHTML=value;
}
display();
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("showResult").innerHTML="";
    let coordinateX = parseInt(prompt("Nhap vao toa do dong muon thay doi: "));
    let coordinateY = parseInt(prompt("Nhap vao toa do cot muon thay doi: "));
    let changeValue = prompt("Nhap vao gia tri muon thay doi: ")
    arr[coordinateX][coordinateY+1]= `<td>${changeValue}</td>`;
    display();
})
