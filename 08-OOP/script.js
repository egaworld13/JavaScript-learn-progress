'use strict';
//* OOP
//?constructor func  / Arrow not work / name is with 1st capital letter
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Methods
  //! Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const edgars = new Person('Edgars', 1989);

//Behind the scene of creating new Persona
//1. New{}is created
//2. Fucntion is called
//3. {} linked to prototype
//4. Function automaticly return{}
// const ilona = new Person('Ilona', 1991);
// const ernests = new Person('Ernests', 2017);
// const elizabete = new Person('Elizabete', 2021);
// console.log(ilona, edgars);
//CHECKING
// console.log(edgars instanceof Person);

//*PROTOTYPES
// console.log(Person.prototype);
//Add method to obj
//! Do this  / Only exists 1 example of this func .
Person.prototype.calcAge = function () {
  // return 2022 - this.birthYear;
  console.log(2022 - this.birthYear);
};

// console.log(edgars.calcAge());
// edgars.calcAge();
// ilona.calcAge();
// ernests.calcAge();
// elizabete.calcAge();
//Show edgars obj content
// console.log(edgars.__proto__);
// console.log(edgars.__proto__ === Person.prototype); //True
// console.log(Person.prototype.isPrototypeOf(edgars)); //True
// console.log(Person.prototype.isPrototypeOf(Person)); //False
// //?  prototype should call = prototypeOfLinkedObjects(makes more sense)

Person.prototype.species = 'Homo sapiens';
// console.log(edgars, ilona); // get species property species its not inherited property
// //Check for property
// console.log(edgars.hasOwnProperty('firstName')); //true
// console.log(edgars.hasOwnProperty('species')); //false
//*PROTOTYPLE INHERITANCE
// console.log(edgars.__proto__);
// //Object.prototype(top of prototype chain)
// console.log(edgars.__proto__.__proto__);
// console.log(edgars.__proto__.__proto__.__proto__); // null
// //Show commented code too :
// console.log(Person.prototype.constructor);

// console.dir(Person.prototype.constructor);
//Show how arrays get acess to all methods they have
const arr = [4, 5, 5, 7, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //True

// console.log(arr.__proto__.__proto__);
//? Creating our own method and make it available to all arrays.
//!Dont use it ...
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
//? Object -> Event Target->Node->Element->HTML Element
const h1 = document.querySelector('h1');
console.dir(h1.__proto__);
console.dir(x => x + 1);
