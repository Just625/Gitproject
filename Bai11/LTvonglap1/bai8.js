document.getElementById("btn").addEventListener("click", function(){
    let minNumb = parseFloat(prompt("Số nhỏ nhất trong khoảng: "));
    let maxNumb = parseFloat(prompt("Số lớn nhất trong khoảng: "));
    let randNumbInRange = Math.floor(Math.random()*(maxNumb-minNumb+1))+minNumb;
    alert(randNumbInRange);
    for(let i =0; i<3;i++){
        let guessNumb = parseFloat(prompt(`Đoán số trong khoảng ${minNumb} - ${maxNumb}: `));
        if (guessNumb==randNumbInRange){
            alert("Chúc mừng!");
            break;
        }else if(guessNumb<randNumbInRange){
            alert(`Số bạn đoán hơi bé. Bạn còn ${2-i} lần đoán.`);
        }else {
            alert(`Số bạn đoán hơi lớn. Bạn còn ${2-i} lần đoán.`)
        }

    }

})