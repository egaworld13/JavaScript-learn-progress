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
const renderCountry = function (data, className = '') {
  const lang = Object.values(data.languages);
  let curr = [];
  Object.values(data.currencies).forEach(el => curr.push(el.name));
  const html = `
<article class="country ${className}">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} m people</p>
  <p class="country__row"><span>🗣️</span>${lang.join(', ')}</p>
  <p class="country__row"><span>💰</span>${curr.join(', ')}</p>
</div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getContryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountry(data[0], 'neighbour');
    });
};

getContryData('australia');
