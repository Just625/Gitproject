let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");

pic1.src = `images/pic1/${Math.floor(Math.random()*3)+1}.jpg`;
pic2.src = `images/pic2/${Math.floor(Math.random()*3)+1}.jpg`;
pic3.src = `images/pic3/${Math.floor(Math.random()*3)+1}.jpg`;
pic4.src = `images/pic4/${Math.floor(Math.random()*3)+1}.jpg`;
pic5.src = `images/pic5/${Math.floor(Math.random()*3)+1}.jpg`;


function clickedBtn() {
    let btnID = document.getElementById(this.id)
    btnID.src = `images/${this.id}/${Math.floor(Math.random()*3)+1}.jpg`
    if (pic1.src.substr(51,1) == pic2.src.substr(51,1)
        && pic1.src.substr(51,1) == pic3.src.substr(51,1)
        && pic1.src.substr(51,1) == pic4.src.substr(51,1)
        && pic1.src.substr(51,1) == pic5.src.substr(51,1)){
        document.getElementById("showResult").innerText = "Congrats. Press F5 to play again"
    }
}

pic1.addEventListener("click",clickedBtn);
pic2.addEventListener("click",clickedBtn);
pic3.addEventListener("click",clickedBtn);
pic4.addEventListener("click",clickedBtn);
pic5.addEventListener("click",clickedBtn);



