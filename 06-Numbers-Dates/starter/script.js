'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-09-11T17:01:17.194Z',
    '2020-09-13T23:36:17.929Z',
    '2022-09-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2022-09-13T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const daysInterval = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = daysInterval(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    //DATE
    const date = new Date(acc.movementsDates[i]);
    const displyDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displyDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//* INTERNATIALIZATION
//? Experimenting API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric', // long - for name / 2-digit
//   year: 'numeric', //2-digit
//   weekday: 'long',
// };

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    console.log(currentAccount.locale);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//* CONVERT ADN CHECK NUMBERS
// console.log(23 === 23.0);
// //? base 10 - ( 0 to 9 )
// //? Binary base 2 - 01
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //False

// console.log(Number('23'));
// console.log(+'23'); // Same as line above
// //Parsing =>syntax analysis
// console.log(Number.parseInt('30px', 10)); //number 30 => str need to start with number
// console.log(Number.parseInt('e23', 10)); //NaN
// console.log(Number.parseInt('2.5rem  ')); //2
// console.log(Number.parseFloat('  2.5rem')); //2.5
// //Check if value is NaN
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20X')); //false
// console.log(Number.isNaN(20 / 0)); //false
// //* Best solution for checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isNaN(20 / 0));
// console.log(Number.isInteger(23)); //True
// console.log(Number.isInteger(23.0)); //True
// console.log(Number.isInteger(23 / 0)); //False

//* Math and Rounding
//square root
// console.log(Math.sqrt(9));
// console.log(9 ** (1 / 2));
// console.log(8 ** (1 / 3)); // 2 pakāpe3 =8
// console.log(2 ** 3);
// //exponentiation operator(pakāpe)
// console.log(2 ** 4);

// //Max value
// console.log(Math.max(1, 2, 3, 4, 5, 10)); //10
// console.log(Math.max(1, 2, 3, 4, 5, '10')); //10
// console.log(Math.max(1, 2, 3, 4, 5, '10px')); //not parsing..
// //Min
// console.log(Math.min(1, 2, 3, 4, 5));
// //Calc are of circle
// console.log(Math.PI * Number.parseFloat('10px') ** 2); //Calc cicrle area with radius 10px

// //Rand num
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
// // 0..1->0...(max-min)->min...max
// randomInt(5, 10);
// //* Rounding intigers
// console.log(Math.trunc(10.83)); //10

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.9)); //24

// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.9)); //24

// console.log(Math.floor(23.3)); //23
// console.log(Math.floor('23.9')); //23
// // Negative number
// console.log(Math.trunc(-10.83)); //10 look in same direction as with+
// console.log(Math.floor(-10.83)); //11 look in right direction

// //Rounding decimals
// console.log((2.7).toFixed(0)); //tofixed return string.
// console.log(+(2.345).toFixed(2)); // + return intiger
//*Remainder operator
// console.log(5 % 2); // remains 1 / 5=2*2+1
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(5));
// console.log(isEven(7));
// console.log(isEven(6));
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'grey';
//     if (i % 3 === 0) row.style.backgroundColor = 'yellow';
//   });
// });
//*Numeric seperators '_'
// const diameter = 287_460_000_000;
// console.log(diameter);
// const price = 345_99;
// console.log(price);
// const PI = 3.14_15;
// console.log(PI);
// console.log(Number('23_000')); //NaN
//* PRIMITIVE DATA TYPE => BIGINT
// console.log(2 ** 53 - 1); // bigest number which can be represented in JS
// console.log(Number.MAX_SAFE_INTEGER); // same as previous
// //some result are correct and some doesn't
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// //*BigInt
// console.log(168451683152556645646168464464); //error number
// console.log(168451683152556645646168464464n); //show correct
// console.log(BigInt(15464684686868325354844546156));
// console.log(10000n + 10000n);
// console.log(214231589275014501759304810803475813n * 100000n);
// const huge = 213123194314097109534053n;
// const num = 23;
// console.log(huge * BigInt(num));
// console.log(20n > 15);
// console.log(20n === 20); //false
// console.log(20n == 20); //true
// console.log(huge + 'is realy big');
//?Division
// console.log(11n / 3n); //3
// console.log(10 / 3); //3.333333333;
//*CREATING DATES
// const now = new Date();
// console.log(now);
// console.log(new Date('Sep 13 2022 10:41:17'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5)); //y/m/d/h/m/s //month count from 0 so 10-november instead of 11

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //day/hour/min/sec/milisec

//working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); //2037
// console.log(future.getMonth()); //10
// console.log(future.getDate()); //19
// console.log(future.getDay()); //4
// console.log(future.getHours()); //15
// console.log(future.getMinutes()); //23
// console.log(future.getSeconds()); //0
// console.log(future.toISOString()); //2037-11-19T13:23:00.000Z
// console.log(future.getTime()); //2142249780000 miliseconds from 1970 1 Jan

// console.log(new Date(2142249780000));

// console.log(Date.now());
// console.log(new Date(1663056004632));
//* FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric', // long - for name / 2-digit
  year: 'numeric', //2-digit
  // weekday: 'long',
};
// const locale = navigator.language;
// console.log(currentAccount.locale);

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;
//* OPERATIONS WITH DATES
// const future = new Date(2037, 10, 19, 15, 23, 5);
// console.log(Number(future)); //miliseconds
// console.log(+future); //miliseconds

// const daysInterval = (date1, date2) =>
//   Math.abs(date1 - date2) / (1000 * 60 * 60 * 24); // converting to days -> miliseconds to-> sec,min,h,d
// const days1 = daysInterval(new Date(2022, 9, 13), new Date(2021, 5, 2)); // cant write 03 or 09 in month
// console.log(days1);
