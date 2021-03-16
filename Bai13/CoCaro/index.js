let tableArray = [
    ['<tr>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','</tr>'],
    ['<tr>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','</tr>'],
    ['<tr>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','</tr>'],
    ['<tr>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','</tr>'],
    ['<tr>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','<td>.</td>','</tr>'],
];

function displayTable(){
    let value = '';
    for(let i =0;i<tableArray.length;i++){
        for(let j=0;j<tableArray[i].length;j++){
            value += tableArray[i][j];
        }
    }
    document.getElementById("showResult").innerHTML="<table>"+value+"</table>"
}
displayTable()
let checkPlayer = 0;
document.getElementById("btn").addEventListener("click",function() {
    let coordinateX;
    let coordinateY;
    let condition;
    do {
        coordinateX = parseInt(prompt("Nhap vao so dong:"));
        coordinateY = parseInt(prompt("Nhap vao so cot:"));
        condition = (coordinateY <= 0 && coordinateY >= 5)
            || (coordinateX <= 0 && coordinateX >= 5)
            || tableArray[coordinateX - 1][coordinateY] === "<td>X</td>"
            || tableArray[coordinateX - 1][coordinateY] === "<td>O</td>"
    } while (condition);
    if (checkPlayer % 2 === 0) {
        tableArray[coordinateX - 1][coordinateY] = "<td>X</td>"
    } else {
        tableArray[coordinateX - 1][coordinateY] = "<td>O</td>"
    }
    checkPlayer++;
    displayTable();
    //Cac cau lenh if o ngoai de kiem tra dieu kien voi tableArray dau tien [0,4] va tableArray sau [1,5], se co sai sot do chua nhin dc bao quat
    if(coordinateY-2>-1){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY-2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateX - 1-2>-1 && coordinateY-2>-1){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]== tableArray[coordinateX - 1-2][coordinateY-2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateX - 1-2>-1){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1-2][coordinateY]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateY+2<6 && coordinateX - 1+2<5){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY+2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateY+2<6){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY+2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateY+2<6 && coordinateX - 1+2<5 ){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY+2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateX - 1+2<5){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateY-2>-1 && coordinateX - 1+2<5){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY-2]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateY+1<6){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY+1]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }

    if(coordinateX - 1-1>-1 && coordinateY+1<6){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+1][coordinateY+1]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateX - 1-1>-1 && coordinateY+1<6 && coordinateX - 1+1<5){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+1][coordinateY-1]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
    if(coordinateX - 1-2>-1){
        if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1-2][coordinateY]) {
            alert("You are the winner");
            document.getElementById("btn").disabled = true;
            document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
            return;
        }
    }
})




















