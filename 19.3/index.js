//Bai 1:
function getLength(){
    let str = prompt("enter your string: ");
    document.write(str.length);
}

//Bai 2:
function calAvg(arrs){
    let total = 0;
    for(let i = 0; i<arrs.length;i++){
        total+= arrs[i];
    }
    let avg = total/arrs.length
    return avg
}

//Bai 3:
function getMax(arrs){
    let maxNum = arrs[0];
    for(let i =0;i<arrs.length;i++){
        if(arrs[i]>maxNum){
            maxNum = arrs[i];
        }
    }
    return maxNum
}

function getMin(arrs){
    let minNum = arrs[0];
    for(let j =0; j<arrs.length;j++){
        if(arrs[j]<minNum){
            minNum = arrs[j];
        }
    }
    return minNum
}

//Bai 4:
function calculator(firstNumber, secondNumber,operator){
    switch(operator){
        case "+":
            return firstNumber + secondNumber;
            break;
        case "-":
            return  firstNumber - secondNumber;
            break;
        case "x":
            return  firstNumber * secondNumber;
            break;
        case "/":
            return  firstNumber / secondNumber;
    }
}

//Bai 5:
function checkInt(value){
    if(typeof(value)=="number"&& parseInt(value)-value==0){
            alert(`${value} la so nguyen`);
    }else{
        alert(`${value} khong phai la so nguyen`);
    }
}

//Bai 6:
function greetUser(){
    let userName = prompt("enter your name: ");
    alert(`Hello ${userName}. Welcome back`)
}

//Bai 7:
function addEleAt(arrs,element,index){
    for(let i = arrs.length;i>index;i--){
        arrs[i] = arrs[i-1];
    }
    arrs[index] = element;
}


//Bai 8:
function deleteAt(arrs,index){
    let newArrs = []
    for(let i = 0; i<index;i++){
        newArrs[i]= arrs[i];
    }
    for(let j = index;j<arrs.length-1;j++){
        newArrs[j] = arrs[j+1];
    }
    return newArrs
}


//Bai9:
function findEle(arrs, element){
    let index =-1
    for(let i = 0; i<arrs.length;i++){
        if(arrs[i]==element){
            index=i;
        }
    }
    if(index==-1){
        alert("Phan tu khong thuoc mang");
    }else{
        alert(`Phan tu nam o vi tri tu ${index} cua mang`);
    }
}

//Bai 10:
function countDup(arrs) {
    let a = [];
    let previous;
    let newArray = arrs;
    newArray.sort();
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] !== previous) {
            a.push(1);
        } else {
            a[a.length - 1]+=1
        }
        previous = newArray[i];
    }
    let count = 0;
    for(let j =0; j<a.length;j++){
        if(a[j]>1){
            count += a[j];
        }
    }
    console.log(`So luong phan tu lap trong mang la ${count}`);
}






