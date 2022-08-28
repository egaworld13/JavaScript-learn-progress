'use strict';
//////////Default parameters//////
// const list = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 99) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   list.push(booking);
// };
// createBooking('LH123');
// /// 10 is passenger number
// createBooking('LH123', 10);
// ///Skip parameter -numPassengers
// createBooking('LH123', undefined, 10);

/////////// Pass arguments in to functions//////
// const flight = 'LH234';
// const edgars = {
//   name: 'Edgars Roze',
//   pasport: 1648665584,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // not be afected outside of function variable.
//   passenger.name = `Mr.` + passenger.name; // its work because in object its reference to same memory adress
//   // as obj. outside of funcitoon. PS. They are the same ob in memory heap (dynamic memory)
//   if (passenger.pasport === 1648665584) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };
// // checkIn(flight, edgars);
// console.log(flight);
// console.log(edgars);

// /// is the same as doing ....
// const flightNum = flight;
// const passenger = edgars;
// const newPassport = function (person) {
//   person.pasport = Math.trunc(Math.random() * 10000000000000);
// };
// newPassport(edgars);
// checkIn(flight, edgars);
//Passing by value
//Passing by reference - dont exist in JS/ only by value

/////// Higher order function////
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// //This is higher order function / fn is call back function
// // const transformer = function (str, fn) {
// //   console.log(`Original string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);
// //   console.log(`Transformed by: ${fn.name}`); ///call function name
// // };
// // transformer('JavaScript is the best!', upperFirstWord);
// // transformer('JavaScript is the best!', oneWord);
// // //In JS callbacks are used all the time
// // const high5 = function () {
// //   console.log('👋');
// // };
// // document.body.addEventListener('click', high5);
// // ['Edgars', 'Ilona', 'Ernests', 'Elizabete'].forEach(high5);

// /// Return function that return new fucntion:
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// ////Function return function

// // const greeterHey = greet('Hi,');
// // greeterHey('Edgars');

// // greet('Hello')('Edgars');
// /////////////arrow function example:
// // const greet = greeting => {
// //   return name => console.log(`${greeting} ${name}`);
// // };
// // const greet = greeting => name => console.log(`${greeting} ${name}`);
// // const greeetingHey = greet('Čau');
// // greeetingHey('Edgars');
// // greet('Čau')('Ilona');

// // This. keyword

// const lufthansa = {
//   airline: 'Lufhansa',
//   iataCode: 'LH',
//   bookings: [],
//   //older version of using function in object:
//   //book: function(){}
//   //newer version:
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };
// lufthansa.book(10, 'Edgars');
// lufthansa.book(99, 'Ilona');
// console.log(lufthansa);
// const eurowings = {
//   airline: 'Euro Wings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;
// // Apply this keyword of function to eurowing obj.:

// book.call(eurowings, 18, 'Igors');
// console.log(eurowings);

// book.call(lufthansa, 2312, 'Anna Panna');
// /// Apply method
// const flightData = [583, 'Ernests Roze'];
///Older version of use
// book.apply(eurowings, flightData);
/// Modern JS version of use (destructering array and add to eurowings obj.)
// book.call(eurowings, ...flightData);
// console.log(eurowings);

/// Bind method (allow manualy set this keyword to function call )
// its create new function.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(93, 'Elizabete Roze');
// Its call partial application where where some arguments are set already.
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Valērijs');

// Bind with Event listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

/// Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 100));

// const addVAT = addTax.bind(null, 0.23);
// //addVAT = value => value + value *0.23;
// console.log(addVAT(100));
// // Small Challenge
//Function example:
// const addTax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };
// const calcVAT = addTax(0.2);
// calcVAT(200);
//Arrow func example:
// const addTax = rate => value => console.log(value + value * rate);
// const addVAT = addTax(0.2);
// addVAT(200);
/// IIFE  -> Immediately Invoked Function Expressions
/// Function that disappear after it used.

// const run0nce = function () {
//   console.log('This will never run again');
// };
// run0nce();
// IIFE example
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// console.log(isPrivate); // is Private not accessible
// same here: this one  use more in modern js
// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(isPrivate);
// console.log(notPrivate);
// // Arrow function example
// (() => console.log('This will also never run again'))();

///////// Closures //////////////
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker(); //1
booker(); //2
booker(); //3
console.dir(booker); //can look on closure
// 1st closure situation  :
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 7;
  f = function () {
    console.log(b * 2);
  };
};
g();
f(); // 46
console.dir(f);
// with h we Re-assign f function
h();
f(); // 14
console.dir(f);

// another closure example:
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 gorups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000; // closure have priority of scope chain!

boardPassenger(180, 3);
