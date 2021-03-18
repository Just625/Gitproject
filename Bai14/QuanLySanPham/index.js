let items = ["Axe", "Timbersaw", "Slardar", "Centaur Warrunner","Sand King", "Dark Seer","Beast Master", "Under Lord","Legion Commander"];


function displayItem(){
    let value ="<table><tr>" +
        "<th colspan='3' style='text-align: left;'>Product Name</th>" +
        "<th id='productQuantity'></th>"+
        "</tr>"
    for(let i = 0; i<items.length;i++){
        value = value + `<tr id='row${i}'>`+`<td class='productName' id='value${i}'>${items[i]}</td>`
                + `<td><button class='btn btn2' type='button' id="editBtn${i}">Edit</button></td>`
                + `<td><button class='btn btn2' type='button' id='delBtn${i}'>Delete</button></td>`
                + "</tr>"
    }
    value = value + "</table>"
    document.getElementById("showResult").innerHTML = value;
    for(let i = 0; i<items.length;i++){
        if(i%2==0){
            document.getElementById(`row${i}`).style.backgroundColor = "#F2F2F2";
        }
    }
    document.getElementById('productQuantity').innerHTML = `${items.length} products`
    addItem();
    editItem();
    deleteItem();
}

let addBtn = document.getElementById("addBtn");
function addItem(){
    addBtn.addEventListener("click",function(){
        let inputData = document.getElementById("inputData").value;
        if(inputData!=""){
            items.push(inputData);
            document.getElementById("inputData").value ="";
            displayItem();
            alert("Da them thanh cong");
        }
    })
}


function editItem(){
    for(let j =0; j<items.length;j++){
        let editBtn = document.getElementById(`editBtn${j}`);
        editBtn.addEventListener("click",function(){
            let newName = prompt("Nhap ten moi cua san pham: ");
            items[j]= newName;
            displayItem();
        })
    }
}

function deleteItem(){
    for(let k=0;k<items.length;k++){
        let delBtn = document.getElementById(`delBtn${k}`);
        delBtn.addEventListener("click",function(){
            items.splice(k,1);
            displayItem();
        })
    }
}

displayItem();
