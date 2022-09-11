'use strict';

////////////////////// STRINGS /////////////////////////
//More Excercise with strings//
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const formatStr = str => str.toUpperCase().slice(0, 3);
for (const flight of flights.split('+')) {
  const [action, from, to, time] = flight.split(';');
  const output = `${
    action.startsWith('_Delayed') ? '🛑' : ''
  }${action.replaceAll('_', ' ')} from ${formatStr(from)} to ${formatStr(
    to
  )} (${time.replace(':', 'h')})`.padStart(48, ' ');

  console.log(output);
  // const [first, second] = action.split('_');
  // console.log(first);
  // const delayed = action === 'Delayed' ? action.padStart(9, '🛑') : action;
  // console.log(action);
  // console.log(`${delayed}`);
}
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log(' Edgars '.padStart(15, '$').padEnd(24, '$'));

// const airline = 'Air Baltic';
// const plane = 'A320';
// console.log(plane[0]); // and so on.
// console.log('B737'[0]);
// console.log('B737'.length);
// console.log(airline.length); // space is counted.

// console.log(airline.indexOf('i')); // Give index of first letter i
// console.log(airline.lastIndexOf('i')); //Give index of last letter i

// console.log(airline.slice(4)); // autput string from 5th letter. result is substring
// console.log(airline.slice(4, 7)); // lenght = 7-4; show 4,5,6 idexses;
// //First word
// console.log(airline.slice(0, airline.indexOf(' ')));
// //Last word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// // slice with negative index
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(-2, 1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else console.log('You got luck');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// console.log(airline.toUpperCase());
// console.log('EDGARS'.toLowerCase());

// //Fix capitalization in name
// const passenger = 'eDgARS';
// const passengerLower = passenger.toLowerCase(); //edgars
// console.log('LowerCase: ' + passengerLower);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // User input email!
// const email = 'ega@mail.com';
// const loginEmail = '   EgA@mail.com \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// // Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
// const announcement = `We are pleased to announce
// that we’re expanding due to our remarkable growth and success over expanding the last five expanding years.`;
// // console.log(announcement.replace('expanding', 'working'));// replace first word
// // console.log(announcement.replaceAll('expanding', 'working')); //replace all words
// //regular expression  /expanding/g - g is for global;
// console.log(announcement.replace(/expanding/g, 'working'));

// //Booleans :
// const plane1 = 'A320neo';
// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('A'));
// if (plane1.startsWith('A') && plane1.endsWith('neo')) console.log(plane1);

// //Practice exercise
// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You cant enter');
//   } else {
//     console.log('You are allowed to enter');
//   }
// };
// checkBaggage('I have a laptop, some Food and pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
/////// SPLIT and JOIN - string method ///////

// console.log('a+very+nice+string'.split('+'));
// console.log('Edgars Roze'.split(' '));
// const [firstName, lastName] = 'Edgars Roze'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const upperCaseWords = [];
//   for (const word of names) {
//     // upperCaseWords.push(word[0].toUpperCase() + word.slice(1));
//     upperCaseWords.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(upperCaseWords.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('edgars roze');

// /////Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+'));
// console.log(' Edgars '.padStart(15, '$').padEnd(24, '$'));

// //Real word example
// const maskCerditCard = function (number) {
//   // const str = String(); OR
//   const str = number + '';
//   // const last = str.slice(-4);
//   return last.padStart(last.length, '*');
// };
// console.log();
// console.log(maskCerditCard(123123154575889));
// console.log(maskCerditCard('90234935240303'));

// //Repeat method
// const message2 = 'Bad waether... All Departures Delayed ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`Here is a ${n} planes in line ${'✈️'.repeat(n)}`);
// };
// planesInLine(5);

// const weekDays1 = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

// //separate obj
// const openingHours = {
//   [weekDays1[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays1[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays1[`${10 - 5}`]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// //////SETS / in set there is no index.
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risotto']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// orderSet.add('Garlic Bread');
// console.log(orderSet);
// orderSet.delete('Risotto');
// console.log(orderSet);
// orderSet.clear();

// for (const order of orderSet) console.log(order);
// ///// Example: set and array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// ///Check how much unique letters ar in word.
// console.log(new Set('edgarsroze').size);
// ///MAPS and theirs methods
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Jelgava, Latvia');
// rest.set(2, 'Rīga, Latvia');
// console.log(rest);

// ///With .set u can chain a lot of inserts:
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');
// console.log(rest.get(true));
// console.log(rest.get(1));
// console.log(rest.get('categories'));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// ///OBJ and ARRAYS as keys
// //[1,2] rename to arr
// rest.set([1, 2], 'Title');
// //With DOM usage
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// /// don't output 'title'
// // and here do the same renameing
// console.log(rest.get(rest.get([1, 2])));
// //If we create array and then put it into map it will work:
// const arr = [1, 2];

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// //Convert Obj to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// /// Iterables
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }
// const answer = Number(prompt('Your answer:'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));
// //Convert map to array :
// const mapToAray = [...question];
// console.log(question.entries());
// console.log(question.keys());
// console.log([...question.values()]);

// console.log(openingHours);
// /// obj literal
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //add obj to obj
//   // openingHours: openingHours,
//   //same effect another solution ES6 enhanced obj literals
//   openingHours,
//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },
//   //lite version of order func (new obj syntax) :
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ mainIndex, starterIndex, time, address }) {
//     // mainIndex, starterIndex, time, address
//     console.log(`Order recived! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at
//     ${time} to ${address}`);
//   },
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing3}, ${ing1}, ${ing2} `);
//   },
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// //Properties names
// const properties = Object.keys(openingHours);
// console.log(properties);
// let opendays = '';
// for (const day of properties) {
//   opendays += `${day},`;
// }
// console.log(opendays);

// //Property VALUES
// const values = Object.values(openingHours);
// // console.log(values);
// //Entrie objects
// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
//Error: dosn't exist
// console.log(restaurant.openingHours.mon.open);
//ES 2020 solution => optional chaining ?.
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // 1 variant :
//   // const open = restaurant.openingHours[day]?.open;
//   // if (open == undefined) continue;
//   // else console.log(`On ${day} we open at ${open}`);
//   //2nd variant
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day} we open at ${open}`);
// }
// //Methods
// console.log(restaurant.risotorder?.(0, 1) ?? 'Method dose not exist');
// //Arrays

// const users = [{ name: 'Edgars', email: 'edgars@mail.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// ///////////for of loop
// // for (const item of menu) console.log(item);
// //each item of array item is now array.
// for (const [nr, el] of menu.entries()) {
//   console.log(`${nr + 1} : ${el}`);
// }
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Edgars Roze',
// };
// //return  20
// rest1.numGuests = rest1.numGuests || 10;
// //return 10
// rest2.numGuests = rest2.numGuests || 10;
// /// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// // if default numguests is 0 : nullish operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

// rest1.owner &&= 'ANONYMOUS';
// rest2.owner &&= 'ANONYMOUS';

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// //Nullish : null and undefinied (Not 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
// //Conditional operators
// console.log(3 || 'Edgars');
// console.log(' ' || 'Edgars'); //'' false
// console.log(true || 0);
// console.log(undefined || null); //undefined is false
// console.log(undefined || 0 || '' || 'Hello' || null);

// // SET default value, with OR
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);
// ////////////////////////////// AND OPERATOR

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.orderPizza('cheese', 'onion', 'bacon', 'peperoni', 'mushrooms');

// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1 ?"),
// //   prompt("Let's make pasta! Ingredient 2 ?"),
// //   prompt("Let's make pasta! Ingredient 3 ?"),
// // ];
// // restaurant.orderPasta(...ingredients); //spread operator

// //Objects
// const newRestaurant = { foundedIn: 1989, ...restaurant, founder: 'Edgars' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Restaurant Jelgava';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// /// Rest pattern
// //SPREAD, becouse on RIGHT side
// const arr = [1, 2, ...[3, 4]];
// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
/////////////////////////////////////
//Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);
// //Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(4, 5);
// add(6, 7, 8);
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderDelivery({
//   time: '10:30',
//   address: 'Jelgava, Krišjāņa Barona 5',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// const arr = [1, 2, 3];
// const newarr = [...arr, 4, 5, 6];
// console.log(newarr);
// const newMenu = [...restaurant.mainMenu, 'Spagetti', 'Panckake'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...newMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Edgars';
// const letters = [...str];
// console.log(letters);
// console.log(...str);
//Dont work!!
// console.log(`${...str}`);

// //obj destructering
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // [] make menu empty ,placeholder. starter = [] if starter Menu not exist, its make starter placeholder.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// //not work!
// // {a,b}=obj;
// //Working version
// ({ a, b } = obj);
// console.log(a, b);

// //Nested obj
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// //Array destructering
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainMeal] = restaurant.order(2, 2);
// console.log(starter, mainMeal);

// const nested = [2, 4, [5, 6]];
// // const [g, , m] = nested;
// // console.log(g, m);

// const [g, , [m, f]] = nested;
// console.log(g, m, f);

// //Default values
// const [j = 1, h = 2, o = 3] = [5, 6];
// console.log(j, h, o);
