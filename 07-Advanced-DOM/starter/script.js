'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//?more modern way to add event to both btns
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//?older way to add event to btns
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//* COOKIE MESSAGE
const header = document.querySelector('.header');
const message = document.createElement('div');
//Add style to div element
message.classList.add('cookie-message');
//Add element after header with message
message.innerHTML =
  'We use cookies for Fun! :) <button class="btn btn--close-cookie">Got it</button>';
header.after(message);
//Add inline style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//Add event listener to remove element on click!
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
//* SCROLLING FUNCTIONALITY
const section1 = document.querySelector('#section--1');
//btn select
const btnScrollTo = document.querySelector('.btn--scroll-to');
//Function
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

////*LECTURES
//*SMOOTHLY SCROLL
//? Old method
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e) {
//   //Show section 1 cordinates.
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   //show learn more btn cordinates
//   console.log(e.target.getBoundingClientRect());
//   //page position  on btn click moment
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );
//?SCROLLING
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );
//? SMOOTH SCROLL
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
// });
//* MODERN WAY OF SCROLLING SMOOTHLY
//section select
// const section1 = document.querySelector('#section--1');
// //btn select
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// //Function
// btnScrollTo.addEventListener('click', function () {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//*Select , Create, Delete Element
//? SELECT ELEMENTS
//? Dont need to use selector for:
// console.log(document.documentElement); // log whole doc
// console.log(document.head); // log head element
// console.log(document.body); //log body element

// //? Need selector
// document.querySelector('.header'); // select first header element.
// const allSections = document.querySelectorAll('.section'); // select all section elements.
// //For ID
// document.getElementById('seciton--1');
// //all btn selected
// const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);
// console.log(document.getElementsByClassName('btn'));
//?CREATING AND INSERTING ELEMENTS
// .insertAdjacentHTML
// const message = document.createElement('div'); // At this point its not in DOM yet!
// //Add class to div element.
// message.classList.add('cookie-message');
// // Add text to div element
// // message.textContent = 'We use cookies for Fun! :)';
// message.innerHTML =
//   'We use cookies for Fun! :) <button class="btn btn--close-cookie">Got it</button>';
// const header = document.querySelector('.header');
// //? works only 1 message
// // header.prepend(message); //Add as first child to header element
// // header.append(message);
// // header.append(message.cloneNode(true));// shows all messages!

// // header.before(message); // add as sibling
// header.after(message); // add as sibling

// //*DELETE ELEMENTS
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
// //*STYLES, ATRIBUTES AND CLASSES
// //? Styles
// // this styles are setup as inline.
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); // show only inline property
// console.log(message.style.backgroundColor); //show only inline property

// console.log(getComputedStyle(message).color); // get color properties for message lement
// console.log(getComputedStyle(message).height); // get height even its not setup in css.
// // convert height from string to number
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // 10 is representing base 10 numbers
// //Change css property in root .
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// //?Atributes (element src alt class id  etc...)
// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// //show full link
// console.log(logo.src);
// //show short link.
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// //None-standart. show undefined
// console.log(logo.designer);
// //none-standartatribute will shown in this way!
// console.log(logo.getAttribute('designer'));
// //add atribute to logo.
// logo.setAttribute('company', 'Bankist');
// //FOR anchor links
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //?Data attributes
// console.log(logo.dataset.versionNumber);
// //?Classes
// logo.classList.add('c'); // can add more than 1 class
// logo.classList.remove('c'); // can add more than 1 class
// logo.classList.toggle('c'); // can add more than 1 class
// logo.classList.contains('c'); // not includes
//*TYPES OF EVENTS AND EVENT HANDLERS.
//e for event
//Modern way/ can add multiple functions
//? pattern for using listener once.
const alertH1 = function (e) {
  alert('You are reding heading');
  // h1.removeEventListener('mouseenter', alertH1);
};
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);
//?Can set time when event is removed.
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//OLD ver.
// h1.onmouseenter = function (e) {
//   alert('You are reding heading');
// };
