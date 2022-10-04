'use strict';
//* OOP
//?constructor func  / Arrow not work / name is with 1st capital letter
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//Methods
//! Never do this
// this.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// };

// const edgars = new Person('Edgars', 1989);

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
// Person.prototype.calcAge = function () {
//   // return 2022 - this.birthYear;
//   console.log(2022 - this.birthYear);
// };

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

// Person.prototype.species = 'Homo sapiens';
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
// const arr = [4, 5, 5, 7, 9, 9];
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
// const h1 = document.querySelector('h1');
// console.dir(h1.__proto__);
// console.dir(x => x + 1);
//*ES6 CLASSES
//?Behind the scene class is a function
//Class expression
// const PersonCl = class {};
//Class declaration
class PersonCl {
  //   //Method of personCl class
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //? Method which is written outside of constructor is on prototype of obj. Prototyple inheritence
  //?Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name !`);
  }
  get fullName() {
    return this._fullName;
  }
}

//Constructor function
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
const edgars = new PersonCl('Edgars Roze', 1989);
console.log(edgars);
// edgars.calcAge();
// console.log(edgars.__proto__ === PersonCl.prototype); //true
// edgars.greet();
console.log(edgars.age);
// const ilona = new PersonCl('Ilona', 1992);
//! 1. Clases are Not hoisted, (its mean that we cant use them before its declaration!)
//! 2. 1st Class citizens (we can pass them to functions and return)
//! 3. Classes are executed in strict mode
//* SETTERS AND GETTERS - they are function set and get value

const account = {
  owner: 'Edgars',
  movements: [200, 90, 30, 280],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //? set method need add exactly 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};
//Write getter as property not as func.
console.log(account.latest);
//Setter usage
account.latest = 50;
console.log(account.movements);
