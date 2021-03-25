// // let person = {
// //     name : {
// //         first: 'Bob',
// //         last: 'Smith'
// //     },
// //     age: 32,
// //     gender: 'male',
// //     interests: ['music', 'skiing'],
// //     bio: function() {
// //         alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
// //     },
// //     greeting: function() {
// //         alert('Hi! I\'m ' + this.name.first + '.');
// //     }
// // };
// //
// // // person.age = 45;
// // // person['name']['last']='Cratchit';
// // // console.log(person.age);
// // // console.log(person['name']['last']);
// // // console.log(person);
// // // person.eyes='hazel';
// // // person.farewell = function(){
// // //     alert('Bye everybody!')
// // // };
// // // console.log(person.eyes);
// // // person.farewell();
// // // let myDataName = prompt("Nhap height")
// // // let myDataValue = prompt("Nhap chieu cao")
// // // person[myDataName] = myDataValue;
// // // console.log(person);
// // person.greeting();
//
// // function createNewPerson(name){
// //     var obj = {};
// //     obj.name = name;
// //     obj.greeting = function(){
// //         alert('Hi! i\'m' + this.name + '.');
// //     };
// //     return obj;
// // }
// //
// // var salva = createNewPerson('Salva');
// // salva.name;
// // salva.greeting();
// //
// // function Person(first, last, age, gender, interests) {
// //     this.name = {
// //         first,
// //         last
// //     };
// //     this.age = age;
// //     this.gender = gender;
// //     this.interests = interests;
// //     this.bio = function() {
// //         let str = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.';
// //         let part2="";
// //         if(this.gender=="male"){
// //             part2 = "He likes "
// //         } else if(this.gender=="female"){
// //             part2 = "She likes "
// //         }
// //         str += part2;
// //         let part3 = "";
// //         for(let i = 0; i < this.interests.length;i++){
// //             if(i==this.interests.length-1){
// //                 part3+=this.interests[i]+ " .";
// //             }else{
// //                 part3 += this.interests[i] + " and ";
// //             }
// //         }
// //         alert(str+part3);
// //     };
// //     this.greeting = function() {
// //         alert('Hi! I\'m ' + this.name.first + '.');
// //     };
// // };
//
// // let a = new Person("Mirana");
// // console.log(Person);
// // console.log(a.name);
// // a.greeting();
// // // Person.nationality = "h"
// //  Person.prototype.nationality = "h";
// // console.log(a.nationality);
//
// // var person1 = new Person('Bob', 'Smith', 32, 'female', ['music', 'skiing','play dota']);
// // person1['age']
// // person1.interests[1]
// // person1.bio()
//
// var person1 = new Object({
//     name: 'Chris',
//     age: 38,
//     greeting: function() {
//         alert('Hi! I\'m ' + this.name + '.');
//     }
// });
// let person2 = Object.create(person1);
// person2.name="a"
// person2.greeting();
let tableArray = [];
for(let i =0; i<5;i++){
    let row = ["<tr>"];
    tableArray.push(row);
    for(let j = 1;j<6;j++){
        row.push("<td>.</td>")
    }
    row.push("</tr>");
}
console.log(tableArray);


