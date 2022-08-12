"use strict";

// function sayHi(firstName){
//     console.log(`Čauuuuuu ${firstName} !⚽⚾🥎🏀🏐🏈🏉⛳`);
// }

// sayHi('Edgars');

// function calculate(number1, number2){

//     const sum =number1+number2;
//     return sum;
// }

// console.log(calculate(10,55));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges piecies.`;
//     return juice;
//   };

//   console.log(fruitProcessor(4,2));

// const calAge = function (birthYeah){
//  return 2022 - birthYear;
// }

// const retaermentCalc = function (birthYeah, firstName) {
// const age = 2022 - c;
// const b = 65 - age;
// return `${d} retires in ${b}`
// }
// const pd = retaermentCalc(1991,'Edgars Roze');
// console.log(pd);

// const friends = ['Edgars','Ilona','Ernests'];

// friends[0]= 'Elizabete';

// console.log(friends.length);
// friends.forEach(name => {
//     console.log(name);
// });

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
// const  years = [1989, 1991,2001,2020];
// console.log(years);
// years.push(2011);//add to the end
// console.log(years);
// years.unshift(2002);//add to begining
// console.log(years);
// years.pop(); // delete last element
// console.log(years);
// years.shift(); // delete first element

// // years.forEach(year => {
// //    console.log(calcAge(year));
// // });

// console.log(years.includes('ega'));
//ARRAY
// const dataarray =[
// 'Edgars',
// 'Roze',
// '1989',
// 'Programmer',
// 'Footbal',
// ];
// //OBJECT/
// const edgars ={
//   firstName : 'Edgars',// PROPERTIES  firstName.
//   lastName : 'Roze',
//   age : 2022-1989,
//   hobby : 'Football',
// };
// console.log(edgars.age);

// const jonas = {
//   friends : ['Edgars','Ilona','Ernests']
// };
// const nameKey = 'hobby';
// console.log(edgars[nameKey]); // expression
// // const bestFriend = jonas[friends[2]];
// console.log(`Jonas has friends ${jonas.friends}, and his best firiend is ${jonas.friends[2]}`);
// // console.log(jonas[friends[2]]);

// const edgars ={
//   firstName : 'Edgars',// PROPERTIES  firstName.
//   lastName : 'Roze',
//   birthYear: 1989,
//   hobby : 'Football',
//   driverLicense: false,
//   calcAge: function(){
// this.age = 2022 - this.birthYear;
// return this.age;
//   },
//   getSummary: function(){
//    return `${this.firstName} is a ${this.calcAge()} years old programmer, and ${this.driverLicense ? 'he has a driver license.': "he can't drive."}`;

//   }

// };
// console.log(edgars.getSummary());
// let i=1;
// for(;i<1;){
// console.log(`Lifting wights repetition ${i}⛳`);
// i++;
// };

// const dataarray =[
//   'Edgars',
//   'Roze',
//   2022-1989,
//   'Programmer',
//   ['Footbal', 'Running'],
//   true,
//   ];
// const dataTypes = [];

//   for(let i =0;i<dataarray.length; i++){

//     console.log(typeof dataarray[i] + " :", dataarray[i]);
//     dataTypes.push(typeof dataarray[i]);

//   };
//   console.log(dataTypes);

//   const years = [ 1991,2000,2005,1980];
//   const age = [];
//   for(let i= 0; i<years.length; i++){
//     age.push (2022-years[i]);

//   };

// console.log(age);

// const dataarray =[
//     'Edgars',
//     'Roze',
//     2022-1989,
//     'Programmer',
//     ['Footbal', 'Running'],
//     true,
//     ];
// const dataTypes = [];

//   for(let i =0;i<dataarray.length; i++){
//     if(typeof dataarray[i] !== 'string')
//     continue;
//     console.log(typeof dataarray[i] + " :", dataarray[i]);
//     dataTypes.push(typeof dataarray[i]);

//   };
// const dataarray =[
//   'Edgars',
//   'Roze',
//   2022-1989,
//   'Programmer',
//   ['Footbal', 'Running'],
//   true,
//   ];

//   for(let i = dataarray.length-1; i>=0;i--){
//     console.log(dataarray[i]);

//   };

// for(let i = dataarray.length-1; i>=0;i--){
//   console.log(dataarray[i]);

// };
// let i=0;
// while(i<=10){
//   console.log(i);
//   i++;
// }
let num = Math.trunc(Math.random() * 6) + 1;
while (num !== 1) {
  console.log("Wrong number :" + num);
  num = Math.trunc(Math.random() * 6) + 1;
}
console.log("Right number :" + num);

console.log("HI");
