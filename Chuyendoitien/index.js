let btn =document.getElementById("btn")
btn.addEventListener("click",prtOut);
function prtOut(){
	let showResult = document.getElementById("showResult");
	let money = document.getElementById("money").value;
	money = parseInt(money);
	let canDoi = document.getElementById("canDoi").value;
	let doiSang = document.getElementById("doiSang").value;
	if (canDoi=="vnd" && doiSang=="usd"){
		moneyDoi = money/23000;
		showResult.innerText ="Result :" + moneyDoi.toLocaleString() +" "+doiSang.toUpperCase();
	} else {
		if (canDoi=="usd" && doiSang=="vnd"){
			moneyDoi = money*23000;
			showResult.innerText ="Result :" + moneyDoi.toLocaleString()+" " + doiSang.toUpperCase();
		}
		else{
			showResult.innerText ="Result :" + money.toLocaleString()+" " + canDoi.toUpperCase();
		}
	}
}
