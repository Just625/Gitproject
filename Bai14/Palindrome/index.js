let s = prompt("Nhap tu can kiem tra: ")

function isPalindrome(str){
    if(str.length==0 || str.length==1){
        return true
    }
    if(str[0]!=str[str.length-1]){
        return false
    }else{
        if(typeof (str)=="string"){
            str=str.split('');
        }
        str.pop();
        str.shift();
        return isPalindrome(str)
    }
}
console.log(isPalindrome(s));