'use strict';
/*
//1. uzd
console.log("1st version:");
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.95;
//27.3
let markBMI = markWeight/markHeight **2;
let johnBMI = johnWeight/johnHeight **2;
console.log(markBMI);
console.log(johnBMI);


if(markBMI<johnBMI){

    console.log(`Mark's BMI is higher than John's (${markBMI.toFixed(1)}) !`);
}else{
    console.log(`John's BMI is higher than Mark's (${johnBMI.toFixed(1)})!`);
}
*/
// const sun = '1989';
// console.log(Number(sun));
// const skaitlis = 'ega';
// console.log(String(skaitlis));

//3. uzd
// const avarageDolphins = (96+108+99)/3;
// const avarageKoalas = (88+91+110)/3;

// console.log(avarageDolphins.toFixed(0));
// console.log(avarageKoalas.toFixed(0));

// if(avarageDolphins>avarageKoalas && avarageDolphins>= 100){
//     console.log(`Dolphins win with result ${avarageDolphins.toFixed(0)} : ${avarageKoalas.toFixed(0)}`);
// }else if(avarageDolphins<avarageKoalas && avarageKoalas >=100){
//     console.log(`Koalas win with result  ${avarageKoalas.toFixed(0)} : ${avarageDolphins.toFixed(0)}`);
// }else if(avarageDolphins === avarageKoalas && avarageDolphins>=100 && avarageKoalas>= 100){
//     console.log("It's a draw!");
// }
// else{console.log("No team who win a thropy!  ")};
// const bill =430;
// const tip = bill<=301 && bill>=51 ? bill/100*15 : bill/100*20;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill+tip}`);

// const calcAvarage = (firstScore, seconScore, thirdScore) => (firstScore+seconScore+thirdScore)/3;

// const avgDolphins = calcAvarage(44,23,71);
// const avgKoalas = calcAvarage(1165,54,49);

// const checkWinner = function (avgDolphins,avgKoalas)
// {
//     if(avgDolphins>= 2 * avgKoalas){
//        console.log(`Dolphins win with avarage score ${avgDolphins} : ${avgKoalas} !`);

//     }else if (avgDolphins*2<=avgKoalas) {
//         console.log(`Koalas win with avarage score : ${avgKoalas} : ${avgDolphins} !`);
//     }else console.log('there is no winner');

// };
// checkWinner(avgDolphins,avgKoalas);

//Function to calculate tip
// const tips = [];
// var summ = [];
// const bills = [125,555,44];

// //funciton calcs tip
// const calcTip = function(bill){
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.20;
// tips.push(tip);
// };
// //TIP CALC
// bills.forEach (bill => {
// calcTip(bill);
// });
// finalPay(tips,bills);
// function finalPay (tips,bills){
// let i=0;

//     while (i<tips.lenght && i<bills.lenght){
//      summ.push(bills[i]+tips[i]);
//      i++;
//     }

// }

// console.log(summ);

// bills.forEach(bill => {
//     const result = calcTip(bill);

// });

// const mark = {
// firstName: 'Mark',
// sureName: 'Miller',
// weight: 78,
// height: 1.69,
// calcBMI: function(){
//     this.bmi = this.weight / (this.height ** 2);
//     return this.bmi;
//         }

// };

// const john = {

//     firstName: 'John',
//     sureName: 'Smith',
//     weight: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.weight / (this.height ** 2);
//         return this.bmi;
//         }
// };
// mark.calcBMI();
// john.calcBMI();

// if(john.bmi > mark.bmi ){
//     console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`);
// }
// else{
//     console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`);
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals =[];

// const calcTip = function(bill){
//     const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *0.20;
//     tips.push(tip);};

// for( let i=0; i<=bills.length-1;i++){
// calcTip(bills[i]);
// totals.push(bills[i]+tips[i]);
// };

// console.log("Tips: " + tips);
// console.log("Total bill : " + totals);

// const calcAvarage = function (arr) {
//   let summ = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     summ += arr[i];
//   }
//   return summ.toFixed(1) / arr.length;
// };
// console.log(calcAvarage([20, 3, 7]));

// console.log("Avarage bill is : " + calcAvarage(totals) + " $")

//1 VARIANTS
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let result = "";
//   let i = 0;
//   for (; i < arr.length; i++) {
//     result += `... ${arr[i]} °C in ${i + 1} days`;
//     if (i + 1 == arr.length) {
//       result += `...`;
//     }
//   }
//   return result;
// };

// console.log(printForecast(data1));
// console.log(printForecast(data2));

//2.VARIANTS
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let result = "";
//   let i = 0;
//   for (; i < arr.length; i++) {
//     result += `... ${arr[i]} °C in ${i + 1} days`;
//     if (i + 1 == arr.length) {
//       result += `...`;
//     }
//   }
//   return result;
// };

// console.log(printForecast(data1));
// console.log(printForecast(data2));
/////////////////////////////////////
/// Data Structures, Modern Operators and Strings
///#1st Challenge.
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, players2] = game.players;
// // Bayern Munich team players list:
// const [[gk, ...fieldPlayers]] = game.players;
// // console.log(gk, fieldPlayers);
// ///Bayern Munich final team players list:
// ///////////////////////////...fiedlPlayers destructuring that array in strings.
// const players1Final = [gk, ...fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // All players:
// const [[...mB], [...dB]] = game.players;
// // console.log(mB, dB);
// //
// // Odds obj destructuring
// // const { team1, x: draw, team2 } = game.odds;
// // console.log(game.odds);
// // console.log(team1, draw, team2);
// // Odds obj destructuring 2v
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //Winner team
// //Print winner becauselogical OR operator looks on first true condition or last condition
// console.log(team1 > team2 || game.team1);
// team1 < team2 && console.log('Team 1 is more chance to win');
// //Teacher solution: Function
// function printGoals1(...players) {
//   console.log(`${players.lenght} goals ware scored`);
// }
// printGoals1(...game.scored);
// //Functions for Goals
// function printGoals(...playerName) {
//   let scoredPlayers = '';
//   let scoredBallForOnePlayer = 1;
//   for (let i = 0; i < playerName.length; i++) {
//     for (let a = 0; a < game.scored.length; a++) {
//       if (playerName[i] === game.scored[a]) {
//         if (scoredPlayers == playerName[i]) scoredBallForOnePlayer++;
//         else scoredPlayers += playerName[i];
//       }
//     }
//   }
//   console.log(
//     `Fooball game between ${game.team1} and ${game.team2} was played in ${game.date}
//      with score ${game.score}
//     `
//   );
//   console.log(
//     `Your guessed scorers of game is : ${scoredPlayers} : ${scoredBallForOnePlayer} goals`
//   );
//   console.log(playerName);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Gnarby');
//////////////2nd Challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //#1
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1} : ${value}`);
// }
// //#2
// const odds = Object.values(game.odds);
// let avarageOdd = 0;

// for (const x of odds) {
//   avarageOdd += x;
// }
// avarageOdd /= odds.length;
// console.log('Avarage odd : ' + avarageOdd.toFixed(1));
// //#3
// //teams name
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'drow' : `victory ${game[team]}`;
//   ///////Solution without victory word but use nullish and optional chining operators
//   // const teamStr = game?.[team] ?? 'draw';
//   // console.log(teamStr);
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }
// //#4 BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// /////////// #3rd Code challenge
// //#1 Create array with no dublicate from map.
// // const events = new Set();
// // for (const [, values] of gameEvents) events.add(`${values}`);
// // console.log(events);
// ///#1 Teacher version : [...] destructur arrays that inside.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //#2 remove yelow card form game log
// gameEvents.delete(64);
// //#3 Create a string with dynamic values.
// console.log(
//   `An even happened, on avarage, every ${90 / gameEvents.size} minutes`
// );
// ///#3 more accurate version :
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An even happened, on avarage, every ${time / gameEvents.size} minutes`
// );
// //#4 Loop
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key} : ${value}`);
// }
///////////#4 Coding Challenge
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');
// const finalWords = [];
// const result = [];
// let longestWord = '';

// // calculate longest string in array!
// const longestWordCalc = function (value) {
//   for (const i of value) {
//     longestWord.length < i.length ? (longestWord = i) : longestWord;
//   }
//   return longestWord;
// };

// const remake = function () {
//   const text = document.querySelector('textarea').value;
//   const words = text.toLowerCase().trimStart().split('\n'); ///[_\n]/
//   for (const [i, wordsFinal] of words.entries()) {
//     const lenght = longestWordCalc(words); //My solution
//     const index = wordsFinal.indexOf('_') + 1; //My solution

//     console.log(
//       `${wordsFinal
//         .replace('_' + wordsFinal[index], wordsFinal[index].toUpperCase())
//         .padEnd(lenght.length + 5, '.')}${'✅'.repeat([i + 1])}`
//     );
//   }
// };
// button.addEventListener('click', remake);
/// #1st Coding Challenge (functions):
//Add button
// const btn = document.createElement('button');
// btn.innerHTML = 'Answer poll !?';
// btn.classList.add('poll');
// document.body.appendChild(btn);
// // obj
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0 : JavaScript', '1 : Python', '2 : Rust', `3 : C++`],
//   answers: new Array(4).fill(0), // This generates [0, 0, 0, 0]. More in the next section!
//   registerNewAnswer() {
//     //My solution to write each option in new line. another is with join method.
//     // const list = [];
//     // for (const options of poll.options) {
//     //   list.push('\n' + options);
//     // }
//     // const result = Number(
//     //   prompt(`${this.question} ${list} \n Answer 0 to 3 :`)
//     // );
//     //With join is more simplier to write this solution!
//     const result = Number(
//       prompt(`${this.question}\n${this.options.join(`\n`)} \n Answer 0 to 3 :`)
//     );
//     // result >= 0 && result <= 3
//     //   ? (this.answers[result] += 1)
//     //   : alert('Wrong answer!');
//     //long Long-circuit evaluation
//     typeof result === 'number' &&
//       result < this.answers.length &&
//       this.answers[result]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// call function  registerNewAnswer on btn click
// btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//bonus test data
// const data = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];
// poll.displayResults.call({ answers: data });
// poll.displayResults.call({ answers: data2 }, 'string');
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();
