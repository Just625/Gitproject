let tableArray = [];
for(let i =0; i<5;i++){
    let row = [];
    tableArray.push(row);
    for(let j = 1;j<5+1;j++){
        row.push("<td>.</td>")
    }
}

function displayTable(){
    let value = '';
    for(let i =0;i<tableArray.length;i++){
        value+="<tr>"
        for(let j=0;j<tableArray[i].length;j++){
            value += tableArray[i][j];
        }
        value+="</tr>";
    }
    document.getElementById("showResult").innerHTML="<table>"+value+"</table>"
}
displayTable()

let checkPlayer = 0;
function displayWinner(){
    alert("You are the winner");
    document.getElementById("btn").disabled = true;
    document.getElementById("pressRestart").innerHTML = "Reload the web to play another round";
}

document.getElementById("btn").addEventListener("click",function() {
    let coordinateX;
    let coordinateY;
    let condition;
    do {
        coordinateX = parseInt(prompt("Nhap vao so dong:"));
        coordinateY = parseInt(prompt("Nhap vao so cot:"));
        condition = (coordinateY <= 0 && coordinateY >= 5)
            || (coordinateX <= 0 && coordinateX >= 5)
            || tableArray[coordinateX ][coordinateY] === "<td>X</td>"
            || tableArray[coordinateX ][coordinateY] === "<td>O</td>"
    } while (condition);
    if (checkPlayer % 2 === 0) {
        tableArray[coordinateX ][coordinateY] = "<td>X</td>"
        document.getElementById("btn").innerHTML = "O turn";
    } else {
        tableArray[coordinateX ][coordinateY] = "<td>O</td>"
        document.getElementById("btn").innerHTML = "X turn";
    }
    checkPlayer++;
    displayTable();
    //Cac cau lenh if o ngoai de kiem tra dieu kien voi tableArray dau tien [0,4] va tableArray sau [1,5], se co sai sot do chua nhin dc bao quat
    // if(coordinateY-2>-1){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY-2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateX - 1-2>-1 && coordinateY-2>-1){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]== tableArray[coordinateX - 1-2][coordinateY-2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateX - 1-2>-1){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1-2][coordinateY]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateY+2<6 && coordinateX - 1+2<5){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY+2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateY+2<6){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY+2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateY+2<6 && coordinateX - 1+2<5 ){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY+2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateX - 1+2<5){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateY-2>-1 && coordinateX - 1+2<5){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1+1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+2][coordinateY-2]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Press restart to play another round"
    //         return;
    //     }
    // }
    // if(coordinateY+1<6){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1][coordinateY+1]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    //
    // if(coordinateX - 1-1>-1 && coordinateY+1<6){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY-1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+1][coordinateY+1]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateX - 1-1>-1 && coordinateY+1<6 && coordinateX - 1+1<5){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY+1] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1+1][coordinateY-1]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    // if(coordinateX - 1-2>-1){
    //     if (tableArray[coordinateX - 1][coordinateY]==tableArray[coordinateX - 1-1][coordinateY] && tableArray[coordinateX - 1][coordinateY]=== tableArray[coordinateX - 1-2][coordinateY]) {
    //         alert("You are the winner");
    //         document.getElementById("btn").disabled = true;
    //         document.getElementById("pressRestart").innerHTML = "Reload the web to play another round"
    //         return;
    //     }
    // }
    //Kiem tra hang ngang
    //Kiem tra hang ngang
    //Gioi han i,i de khong vuot qua khoang [0,4] = [0,tableArray.length);
    for(let i =0;i<tableArray.length;i++) {
        for (let j = 0; j < tableArray[i].length-2; j++) {
            if (tableArray[i][j] != "<td>.</td>" && tableArray[i][j] == tableArray[i][j + 1]&&tableArray[i][j + 1] == tableArray[i][j + 2]) {
                    displayWinner();
                    return;
            }
        }
    }
    // Kiem tra cheo
    for(let i = 0; i<tableArray.length-2;i++){
        for(let j =0;j<tableArray[i].length-2;j++){
            if(tableArray[i][j]!="<td>.</td>"&&tableArray[i][j]==tableArray[i+1][j+1]&&tableArray[i+1][j+1]==tableArray[i+2][j+2]){
                displayWinner();
                return;
            }
        }
    }
    for(let i = 0; i<tableArray.length-2;i++){
        for(let j =2;j<tableArray[i].length;j++){
            if(tableArray[i][j]!="<td>.</td>"&&tableArray[i][j]==tableArray[i+1][j-1] && tableArray[i][j]==tableArray[i+2][j-2]){
                displayWinner();
                return
            }
        }
    }
    // //Kiem tra hang doc
    for(let i = 0; i<tableArray.length-2;i++){
        for(let j =0;j<tableArray[i].length;j++){
            if(tableArray[i][j]!="<td>.</td>"&&tableArray[i][j]==tableArray[i+1][j] && tableArray[i][j]==tableArray[i+2][j]){
                displayWinner();
                return;
            }
        }
    }
})




















