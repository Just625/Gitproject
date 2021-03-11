function checkIn(event) {
    if (event.key=="e"){
        event.preventDefault();
    }
}

document.getElementById("btn").addEventListener("click",function() {
    let inputData = document.getElementById("inputData").value;
    feetM = inputData * 3.2808;
    document.getElementById("showResult").innerHTML = `Feet = ${feetM}`;
});