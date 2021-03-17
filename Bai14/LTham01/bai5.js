let array = [ "Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe","Regulus"];
let array2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aqualia", "Ursa Major", "Leo"];
function findStarName(str){
    for(let i=0;i<array.length;i++){
        if(array[i] == str){
            return array2[i]
        }
    }
    return "Khong tim thay ten ngoi sao"
}