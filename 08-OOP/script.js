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
// class PersonCl {
//   //   //   //Method of personCl class
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //? Instance methods
//   //   //? Method which is written outside of constructor is on prototype of obj. Prototyple inheritence
//   //   //?Method will be added to .prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name !`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //? Add static method
//   static hey = function () {
//     console.log(`Hey there 👋`);
//   };
// }

// // //Constructor function
// // // PersonCl.prototype.greet = function () {
// // //   console.log(`Hey ${this.firstName}`);
// // // };
// const edgars = new PersonCl('Edgars Roze', 1989);
// // console.log(edgars);
// // // edgars.calcAge();
// // // console.log(edgars.__proto__ === PersonCl.prototype); //true
// // // edgars.greet();
// // console.log(edgars.age);
// // const ilona = new PersonCl('Ilona', 1992);
// //! 1. Clases are Not hoisted, (its mean that we cant use them before its declaration!)
// //! 2. 1st Class citizens (we can pass them to functions and return)
// //! 3. Classes are executed in strict mode
// //* SETTERS AND GETTERS - they are function set and get value

// // const account = {
// //   owner: 'Edgars',
// //   movements: [200, 90, 30, 280],
// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },
// //   //? set method need add exactly 1 parameter
// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };
// // //Write getter as property not as func.
// // console.log(account.latest);
// // //Setter usage
// // account.latest = 50;
// // console.log(account.movements);
// //* STATIC METHOD
// //? from method is not a prototype property. its exists only on Array func
// const arr = Array.from(document.querySelectorAll('h1'));
// console.log(arr);
// //Static
// Number.parseFloat(12);

// // static method Not inherited to edgars obj
// // edgars.hey(); // error
// PersonCl.hey();
// //* OBJECT.CREATE
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// //?will be linked to personproto obj. he can use calcAge method
// const arturs = Object.create(PersonProto);
// console.log(arturs);
// //! not best way of doing this
// // arturs.naem = 'Artūrs';
// // arturs.birthYear = 1991;
// // arturs.calcAge();
// // console.log(arturs.__proto__ === PersonProto); //true
// //New obj
// const igors = Object.create(PersonProto);
// igors.init('Igors', 1987);
// igors.calcAge();
// console.log(igors);
//* INHERITANCE BETWEEN CLASSES using constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// //Create student class
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //? Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const edgars = new Student('Edgars', 1989, 'Programming JS');
// console.log(edgars);
// edgars.introduce();
// edgars.calcAge();
// //Experimenting
// console.log(edgars instanceof Student); //true
// console.log(edgars instanceof Person); //Also true
// //? Fixing student prototype name from peron to student.
// Student.prototype.constructor = Student;

// //Create Employe class
// const Employee = function (firstName, birthYear, job, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
//   this.job = job;
// };
// // Linking proto
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype = Object.create(Student.prototype);
// Employee.prototype.hey = function () {
//   console.log(`${this.firstName} working in ${this.job}`);
// };
// const ilona = new Employee('Ilona', 1988, 'VUGD', 'IT');
// console.log(ilona.__proto__);
// ilona.hey();
// ilona.calcAge();
// ilona.introduce();
// * INHERITANCE BETWEEN CLASSES with(ES6 CLASSES)

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name !`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   //? Add static method
//   static hey = function () {
//     console.log(`Hey there 👋`);
//   };
// }
// //? Extends person class
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //? dont need to call it
//     // PersonCl.call()
//     //? Super is constructor func of personCL
//     //! Always needs to happen first!! use it only when have extra properties(arguments)
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   //polymorphism
//   calcAge() {
//     console.log(`I am ${2022 - this.birthYear} years old.`);
//   }
// }

// const marta = new StudentCl('Marta Roze', 2000, 'IT');
// console.log(marta);
// marta.introduce();
// marta.calcAge();
//*INHERITANCE BETWEEN CLASSES  Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const edgars = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const ilona = Object.create(StudentProto);
// ilona.init('Ilona', 1990, 'IT');
// ilona.introduce();
// ilona.calcAge();
//* CLASESS!!!+ ENCAPSULATION /  property = fields .Class Fields adn Methods
//Public fields
//Private fields
//Public methods
//Private methods
//(there is also the static version)
class Account {
  //*1)Public fields(instances)
  locale = navigator.language;

  //*2)Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;
    //?Protected property "_"
    this.#pin = pin;
    // this._movements = [];
  }
  //*3) Public methods
  //! Public interface of our objects (API)
  getMovements() {
    return this.#movements;
  }
  deposit(value) {
    this.#movements.push(value);
    //?Methods chaining
    return this;
  }
  withdraw(value) {
    //Access to another method
    this.deposit(-value);
    //?Methods chaining
    return this;
  }
  // //? not be accaseble for public.
  // _approveLoan(value) {
  //   return true;
  // }
  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
    //?Methods chaining
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  //*4) Private methods
  _approveLoan(value) {
    return true;
  }
}
const acc1 = new Account('Edgars', 'EUR', 1111);
//? not good doing like this:
// //deposit
// acc1.movements.push(200);
// //withdrawal
// acc1.movements.push(-100);
//? Do this (API)
acc1.deposit(250);
acc1.withdraw(100);

acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin); // should not be accesable!!

console.log(acc1.getMovements());
// console.log(acc1.#movements); // not accesable its private
//?Static method!
Account.helper();

//* CHAINING METHODS
acc1.deposit(200).deposit(500).withdraw(35).requestLoan(10000).withdraw(1000);
