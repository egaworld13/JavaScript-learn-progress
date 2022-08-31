'use strict';
////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
//* SLICE method - dont modify original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 3)); // 2-3=1
// console.log(arr.slice(-1)); //always last element of array
// console.log(arr.slice()); // get full array.
// console.log([...arr]); // get full array too.

//* SPLICE method modify original array
// console.log(arr.splice(2)); // modify original array
// arr.splice(-1);
// arr.splice(1, 2); // 1  is start point and 2 is amount of values will be taken out.
// console.log(arr);

// * REVERSE method modify original array!
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//* CONCAT
// const letters = arr.concat(arr2); //method 1
// console.log(letters);
// console.log([...arr, ...arr2]); // method 2
//* JOIN
// console.log(letters.join(' - '));

//* NEW METHOD -> at
// const arr = [23, 11, 64];
// console.log(arr[0]); // method 1
// console.log(arr.at(0)); // method 2
// //?Get last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1)); // modern JS  the easyest way.

// //? work on strings
// console.log('Edgars'.at(0));
// console.log('Edgars'.at(-1));
// * FOR EACH  arrays
//1st is for of :
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//// for (const movement of movements)
// //? Acces to counter veriable
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
// }
// 2nd is forEach :
// //! forEach call back function arguments ORDER is important -> element->index->array
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//   } else console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
// });
// for each  every time call function with value of array movements[0],[1] etc.
//* FOR EACH on SETS and MAPS
//* MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// // arguments in callback func is Similar to arrays arguments
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// //* SET
// //! Remember Set dont have index or key!  _ -> means throw away variable(complete necessary)
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}:${value}`);
// });
