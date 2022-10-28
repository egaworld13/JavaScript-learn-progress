'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// //* Working with country data API (aplication programming interface)
// const getContryData = function (country) {
//   //* AJAX CALL (old version)
//   const request = new XMLHttpRequest();
//   //? open(method, url, async, user, password)
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   //?Sending request to the server(trought url in .open() method )
//   request.send();

//   //? When data will be recived, callback func will be called
//   //? JSON will be received which need convert to an object
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     //* DESTRUCTORING
//     //?languages
//     const lang = Object.values(data.languages);

//     //?Currencies
//     let curr = [];
//     Object.values(data.currencies).forEach(el => curr.push(el.name));

//     // ? displaying elements on page!
//     const html = `
// <article class="country">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )}</p>
//   <p class="country__row"><span>🗣️</span>${lang.join(', ')}</p>
//   <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
// </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// //Calling function with country parameter
// getContryData('latvia');
// // getContryData('estonia');
// // getContryData('lithuania');

// //* GET COUNTRY AND NEIGHBOR (asynchrony to synchrony)

// //* Working with country data API (aplication programming interface)
// const renderCountry = function (data, className = '') {
//   //* DESTRUCTORING
//   //?languages
//   const lang = Object.values(data.languages);

//   //?Currencies
//   let curr = [];
//   Object.values(data.currencies).forEach(el => curr.push(el.name));
//   const html = `
// <article class="country ${className}">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} m people</p>
//   <p class="country__row"><span>🗣️</span>${lang.join(', ')}</p>
//   <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
// </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };
// const getContryAndNeighbour = function (country) {
//   //* AJAX CALL (old version)
//   const request = new XMLHttpRequest();
//   //? open(method, url, async, user, password)
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   //?Sending request to the server(trought url in .open() method )
//   request.send();

//   //? When data will be recived, callback func will be called
//   //? JSON will be received which need convert to an object
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // ? displaying elements on page!
//     //render country 1
//     console.log(data);
//     renderCountry(data);

//     //? GET neighbor country(2)
//     //IF no neighbor
//     const neighbor = data.borders?.[0];
//     //? AJAX call country(2)
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       //? When searching country by code, no need to destructor as []~!
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// //Calling function with country parameter
// getContryAndNeighbour('usa');

//*PROMISES AND FETCH API
//?xml
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/latvia');
// console.log(request); //return promise
// const getContryData = function (country) {
//   //?Return promise
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       //?return promise
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
//////??? Simplified the code
// const renderCountry = function (data, className = '') {
//   const lang = Object.values(data.languages);
//   let curr = [];
//   Object.values(data.currencies).forEach(el => curr.push(el.name));
//   const html = `
// <article class="country ${className}">
// <img class="country__img" src="${data.flags.png}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
//     1
//   )} m people</p>
//   <p class="country__row"><span>🗣️</span>${lang.join(', ')}</p>
//   <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
// </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     response.json();
//   });
// };
// const getContryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       //! Catching error, the best solution
//       renderError(`Something went wrong 📢 ${err.message}`);
//       //* Finally method is called everytime
//       console.error(`${err} 📢`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//*HELPER FUNCTION

//? helper function
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const renderCountry = function (data, className = '') {
//   const lang = Object.values(data.languages);
//   let curr = [];
//   Object.values(data.currencies).forEach(el => curr.push(el.name));
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} m people</p>
//     <p class="country__row"><span>🗣️</span>${lang.join(', ')}</p>
//     <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
//   </div>
//   </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('No neighbour found');

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       //! Catching error, the best solution
//       renderError(`Something went wrong 📢 ${err.message}`);
//       //* Finally method is called every time
//       console.error(`${err} 📢`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// //* HANDLING ERRORS
// // btn.addEventListener('click', function () {
// //   getCountryData(`'${country}'`);
// // });
// // let country = 'default';
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       const country = data.country;
//       getCountryData(country);
//     })
//     .catch(err => console.error(`${err.message}📢`));
// };

// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// //*EVENT LOOP PRATICE
// console.log('Test start'); //1st
// setTimeout(() => console.log('0 sec timer'), 0); //5th
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //3rd
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res); //4th
// }); //4th
// console.log('Test end'); //2nd

//*BUILDING SIMPLE PROMISE

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening ✅');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win ☃️🎉');
//     } else {
//       reject(new Error('You lost your money 🐕'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //? Promisifying setTimeout (similar as fetch)
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2).then(() => {
//   console.log('I waited for 2 seconds');
//   return wait(1).then(() => console.log('I waited for 1 sec.'));
// });

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));
//* PROMISIFYING THE GEOLOCATION API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     //?Same as with callback functions
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));
//* REBUILD REVERS GEOCODING CHALLENGE

// const whereAmI = function () {
//   getPosition().then(pos => {
//     console.log(pos);
//   });

//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       const country = data.country;
//       getCountryData(country);
//     })
//     .catch(err => console.error(`${err.message}📢`));
// };
//*PROMISES WITH ASYNC/AWAIT
//* ERROR HANDLING
//* Returning values from async functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON`);
//     if (!resGeo.ok) throw new Error('Problem to get location data');
//     const dataGeo = await resGeo.json();

//     //Country data
//     // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>console.log(res))
//     //? Same as  using .then();
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem to get country');
//     const data = await res.json();
//     renderCountry(data[0]);
//     //? Returning this from async func!
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err}❌❌❌`);
//     renderError(`Something went wrong ❌❌ ${err.message}`);
//     throw err;
//   }
// };
// console.log('1: Getting location....');
//
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}❌`))
//   .finally(() => console.log('3: Finished getting location'));
//? Same result ! ->
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}❌`);
//   }
//   console.log('3: Finished getting location');
// })();

//? Try catch
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
//* Promises in parallel
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};
// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
// console.log([data1.capital, data2.capital, data3.capital]);

//? Promise all
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('latvia', 'estonia', 'canada');

//*PROMISE COMBINATORS: race, allSettled, any.

//? Promise.race -> recive and return promise
//?IFI
// (async function () {
//   //? displayed only the fastest one!
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/australia`),
//     getJSON(`https://restcountries.com/v3.1/name/germany`),
//     getJSON(`https://restcountries.com/v3.1/name/russia`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took to long'));
//     }, s * 27);
//   });
// };
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/australia`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

//? Promise.allSettled -> return all results of promise
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

//?Promise.all -> short circuting
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

//? Promise.any ->
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
