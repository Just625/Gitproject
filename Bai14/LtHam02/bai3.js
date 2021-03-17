function tinhGiaiThua(number){
    if(number==0){
        return 1
    } else if(number<0){
        return "Vui long nhap so > 0"
    }
    else{
        let total=1
        for(let i = 1; i < number + 1;i++){
            total *= i;
        }
        return total;
    }
}
for(let j = 0; j<6; j++){
    console.log(tinhGiaiThua(j));
}
