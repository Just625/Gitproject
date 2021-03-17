let str = "Some thing   a ! a ";
let count = 0;
let b = "/[.*+?^${}()|[]/! "
if(str[0]!=" "){
    count++;
}
for(let i = 0; i<str.length;i++){
    if(i==str.length-1){
        break;
    }
    if(str[i]==" "){
        let a = 0;
        for(let j =0; j<b.length;j++){
            if(str[i+1]==b[j]){
                a++
            }
        }
        if(a==0){
            count++
        }
    }
}
console.log(count);
