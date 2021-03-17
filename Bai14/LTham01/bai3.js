function aFunction(a,b){
    if(a>b){
        alert(`${a} lon hon ${b}`);
        return;
    }else{
        let total = a + b;
        return total;
    }
}
console.log(aFunction(5,6));
aFunction(6,5);