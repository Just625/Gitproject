let value=""
let startBtn = document.getElementById("startBtn");
class Cell{
    y;
    x;
    valueInside
    constructor(y,x,valueInside){
        this.y = y;
        this.x = x;
        this.valueInside = valueInside;
    }
    getCoordinateYX = function(){
        return `${this.y}${this.x}`
    }
    getHTML = function(){
        let cellDraw = `<div class="cell" id="cell${this.y}${this.x}" style="position:absolute;left:${this.x*40}px;top:${this.y*40}px"></div>`;
        return cellDraw
    }
}


let arr = [];
for(let y =0; y < 5; y++){
    let row = [];
    arr.push(row);
    for(let x = 0; x<5; x++){
        let cell = new Cell(y,x);
        row.push(cell);
        value += cell.getHTML();
    }
}

document.getElementById("showResult").innerHTML = value;

function displayWinner(){
    alert("You are the winner");
    alert("Reload the web to play another round");
    document.getElementById("showResult").className = 'disableBtn';

}
//Can xem lai cach kiem tra dieu kien neu choi 5 lien tuc moi thang hoac nhieu hon. Day chi la kiem tra 3
let playerTurn = 0;
for(let y =0; y < 5; y++){
    for(let x = 0; x<5; x++){
        document.getElementById(`cell${y}${x}`).addEventListener("click",function(){
            if(playerTurn%2==0&&arr[y][x]!="X"&&arr[y][x]!="O"){
                document.getElementById(this.id).innerHTML="X";
                arr[y][x]="X";
                playerTurn++;
                console.log(arr);
            }else if(playerTurn%2!=0&&arr[y][x]!="X"&&arr[y][x]!="O"){
                document.getElementById(this.id).innerHTML="O";
                arr[y][x]="O";
                playerTurn++;
                console.log(arr);
            }else{
                alert('Cell is not empty u know <(")');
            }
            for(let i =0;i<arr.length;i++) {
                for (let j = 0; j < arr[i].length-2; j++) {
                    if (arr[i][j] != "<td>.</td>" && arr[i][j] == arr[i][j + 1]&&arr[i][j + 1] == arr[i][j + 2]) {
                        displayWinner();
                        return;
                    }
                }
            }
            // Kiem tra cheo
            for(let i = 0; i<arr.length-2;i++){
                for(let j =0;j<arr[i].length-2;j++){
                    if(arr[i][j]!="<td>.</td>"&&arr[i][j]==arr[i+1][j+1]&&arr[i][j]==arr[i+2][j+2]){
                        displayWinner();
                        return;
                    }
                }
            }
            for(let i = 0; i<arr.length-2;i++){
                for(let j =2;j<arr[i].length;j++){
                    if(arr[i][j]!="<td>.</td>"&&arr[i][j]==arr[i+1][j-1] && arr[i][j]==arr[i+2][j-2]){
                        displayWinner();
                        return
                    }
                }
            }
            // //Kiem tra hang doc
            for(let i = 0; i<arr.length-2;i++){
                for(let j =0;j<arr[i].length;j++){
                    if(arr[i][j]!="<td>.</td>"&&arr[i][j]==arr[i+1][j] && arr[i][j]==arr[i+2][j]){
                        displayWinner();
                        return;
                    }
                }
            }
        })
    }
}






