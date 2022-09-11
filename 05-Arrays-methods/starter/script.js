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
// * MAP Method for arrays
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
//iterate trought movements arr and each element multiplie by 1.1
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUsd);
//?arrow function example :
// const movementsUsdArrow = movements.map(mov => mov * eurToUsd);
// console.log(movementsUsdArrow);
//* For of usage instead of MAP method
// const movementsUsdfor = [];
// for (const mov of movements) {
//   movementsUsdfor.push(mov * eurToUsd);
// }
// console.log(movementsUsdfor);
// const movementsDescription = movements.map(
//   (mov, i) =>
//     //? Shorter version:
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`

// if (mov > 0) {
//   return `Movement ${i + 1}: You deposited ${mov}`;
// } else {
//   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
// }
// );
// console.log(movementsDescription);

//* FILTER Method
//want to create arr with deposits
// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);
//? for of loop
// const depositsFor = [];
// for (const mov of movements) {
//   mov > 0 ? depositsFor.push(mov) : '';
// }
// console.log(depositsFor);
//? small challenge
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
//* REDUCE method
// acc - summ of arr elements
// const summary = movements.reduce(function (acc, value, i, arr) {
//   return acc + value;
// }, 0);
// console.log(summary);
//? Arrow func example:
// const summArrow = movements.reduce((acc, value) => acc + value, 0); // <- total value count start point
// console.log(summArrow);
//? FOR of loop
// let sumbalance = 0;
// for (const mov of movements) {
//   sumbalance += mov;
// }
// console.log(sumbalance);
//? Maximum value
// const maxValue = movements.reduce(
//   (acc, mov) => (mov > acc ? (acc = mov) : acc),
//   0
// );
// console.log(maxValue);
// * CHAINING METHOD =>filter+map+reduce in one line:)
// const eurToUsd = 1.1;
// const totalDepositsInUsd = movements
//   .filter(move => move > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUsd);
//* FIND METHOD => return only first element of true, not creating new array!
// const firstwithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstwithdrawal);
// //* Another find method example:
// // Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];
// //* Find obj by owner name!
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
// //? FOR OF loop solution
// for (const acc of accounts) {
//   if (acc.owner === 'Sarah Smith') console.log(acc);
// }
//*INCLUDES methods
//?  EQUALITIY includes example: if an array have that value
// console.log(movements);
// console.log(movements.includes('-1300')); //false
// console.log(movements.includes(-130)); //true
//* SOME method => true/false
//? CONDITION check if there are some with that condition
// const anyDeposit = movements.some(mov => mov > 500);
// console.log(anyDeposit);
// //*EVERY method return true if all elements pass condition!
// console.log(movements.every(mov => mov > 0)); //false
// console.log(account4.movements.every(mov => mov > 0)); //true
// //* Separate callback func.
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
//*FLAT, FLATMAP
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // connect all arry together (1lvl deeper only!)
// const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2)); //2=> how deep have to flat method work!
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
//? Use chaining
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
// //*FLATMAP solution // Flatmap goes only 1 lvl deeper.
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
//* JS built in sort methods / by default its sort strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // sort in alphabetic  sequence
// console.log(owners); // Its mutate original string
// console.log(movements);
// // console.log(movements.sort());/ not work with numbers
// //? retunr <0 A,B(keep order)
// //? return >0 B,A (switch order)
// //* Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// movements.sort((a, b) => a - b);
// console.log(movements);
// //*Descending
// movements.sort((a, b) => b - a);
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// console.log(movements);
//* Creating and filling arrays
// const arr = [1, 2, 3, 4, 5, 6, 7];
// //Create array with 7 empty slots
// const x = new Array(7);
// console.log(x);
// //* FILL method
// // x.fill(1); //mutate original arr
// // x.fill(1, 3); // start from index 3
// x.fill(1, 3, 5); // start from index 3 end at 5(include);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// //*Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// //* REAL usecase with arrays.from ( in banksit app)

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );

//   console.log(movementsUI.map(el => el.textContent.replace('€', '')));
// });
//* Arrays practice
//#1 calc how much has been deposit
// const bankDepostiSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(`Total: ${bankDepostiSum}€`);
// //#2 how much depostis at least with 1k value
// //? Another solution is reduce replace with filter
// const largeDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, deposit) => (deposit >= 1000 ? ++count : count), 0);
// console.log(largeDeposits);
//?++ operator (prefixed)
// let a = 10;
// console.log(++a);
// console.log(a);

//# 3 reduce and obj
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );

// console.log(sums);
//# 3. destructuring
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //#v1
//       // cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
//       // return sums;
//       //v2
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// //#4. Titlecase
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
