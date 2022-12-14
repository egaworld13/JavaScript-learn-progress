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
//* PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//* EVENT DELEGATION => page navigation (better solution)
//1.Add event listener to common parent elemnet
//2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//*TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  //Guard clause (if clicked is null then code below not executed)
  if (!clicked) return;

  //Remove  active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Active tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  // console.log(clicked.dataset.tab); // data-tab propertie
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//* MENU FADE ANIMATION
//handler func can take only 1 argument. for more use this keyword
const navOpacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    });
  }
};
const nav = document.querySelector('.nav');
//mouseenter not bubble.
//Set opacity 0.5
// nav.addEventListener('mouseover', function (e) {
//   navOpacity(e, 0.5);
// });
// //Set opacity 1
// nav.addEventListener('mouseout', function (e) {
//   navOpacity(e, 1);
// });
//?Better solution
//Passing 'arguments' into handler
nav.addEventListener('mouseover', navOpacity.bind(0.5));
nav.addEventListener('mouseout', navOpacity.bind(1));
// //*STICKY NAV BAR
// //Scroll event
// //? not good solution
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   //?Getting scroll position
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

//* STICKY NAVIGATION :INTERSECTION OBSERVER API (nov??rot??js)
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // create box, -90px height. so navbar appers exactly 90px befor threshold.
  //this opt allow to navbar appear not in target element but 90px befor it.
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//*REVEALING ELEMENTS TO SCROLL (sections)
const allSections = document.querySelectorAll('.section');
const revielSection = function (entries, observer) {
  const [entry] = entries;

  //?Guard clauses
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revielSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (seciton) {
  sectionObserver.observe(seciton);
  seciton.classList.add('section--hidden');
});
//* LAZY LODING IMG GREATE FOR PERFORMANCE
// img[data-src] select img with propertie data src
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //?Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  //? remove blur only when large img is loaded. important for slow internet.
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // img is loaded 200px before viewport reach img.
});
imgTarget.forEach(img => imgObserver.observe(img));
//*SLIDER COMPONENT
const slider = function () {
  let currSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const maxSlide = slides.length;
  const dotContainer = document.querySelector('.dots');

  //*FUNCTIONS
  const init = function () {
    gotToSlide(0);
    ceateDots();
    activateDot(0);
  };

  const gotToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //?NEXT SLIDE
  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    gotToSlide(currSlide);
    activateDot(currSlide);
  };

  //?PREV SLIDE
  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }

    gotToSlide(currSlide);
    activateDot(currSlide);
  };
  //?Adding dots
  const ceateDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //?Activating dots by adding style
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  init();

  //*EVENT HANDLER

  //?Btn slider
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //?Arrow key slider
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //?Dots
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      gotToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
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
// const alertH1 = function (e) {
//   alert('You are reding heading');
//   // h1.removeEventListener('mouseenter', alertH1);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);
// //?Can set time when event is removed.
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//OLD ver.
// h1.onmouseenter = function (e) {
//   alert('You are reding heading');
// };
//*EVETN PROPAGATION(increasing): BUBBLING NAD CAPTURING
//*eEvent bubbling
//random color = rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget); // target = element which are inbubbling/ currentarget=element which is clikced etc.
//   console.log(e.currentTarget === this); //true
//   //?STOP propagation
//   //parents elements not getting event with color change func
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// ); //  with 3rd parameter 'true' enable capturing phase = it will first execute not like in  bubbling .
//* DOM TRAVERSING (walking trought the dom)
// const h1 = document.querySelector('h1');
//Going downwards:child
// console.log(h1.querySelectorAll('.highlight'));
// //get all waht is under h1
// console.log(h1.childNodes);
// //get html collection(are updated)
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'white';

//Going upwards: perents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// //? CSS PROPERTIE VERIABLE
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// //get all siblings using perent
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
//* INTERSECTION OBSERVER API (nov??rot??js)
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   //root:null; - if null - bounds(robe??as) of the actual document viewport are used.
//   root: null,
//   // threshold - slieksnis, robe??v??rt??ba.
//   //0.1 = 10% of viewport .
//   threshold: [0, 0.2],
// };
// //this func is activated when reach threshold propertie(0.1=10%) top and bot of viewport!is its root=null.
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
//* SLIDER
// let currSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const maxSlide = slides.length;

// const gotToSlide = function (slide) {
//   //Each slide x position is translated depends on index.
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };
// gotToSlide(0);
// //?Next slide
// const nextSlide = function () {
//   if (currSlide === maxSlide - 1) {
//     currSlide = 0;
//   } else {
//     currSlide++;
//   }
//   gotToSlide(currSlide);
//   activateDot(currSlide);
// };
// //?Previos slide
// const prevSlide = function () {
//   if (currSlide === 0) {
//     currSlide = maxSlide - 1;
//   } else {
//     currSlide--;
//   }

//   gotToSlide(currSlide);
//   activateDot(currSlide);
// };
// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);
// //?Arrow key slider
// //Search for presed key
// //ArrowRight
// //ArrowLeft
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'ArrowLeft') prevSlide();
//   //short circuting
//   e.key === 'ArrowRight' && nextSlide();
// });

// //? DOTS
// const dotContainer = document.querySelector('.dots');
// const ceateDots = function () {
//   slides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// ceateDots();
// dotContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot'));
//   //destructuring
//   const { slide } = e.target.dataset;
//   gotToSlide(slide);
//   activateDot(slide);
// });
// const activateDot = function (slide) {
//   //Remove active claas form dots
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList.remove('.dots__dot--active'));
//   //Select current slide
//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add('dots__dot--active');
// };
// activateDot(0);
//*LIFECYCLE DOM EVENTS
//? DOM content loaded
//it's wait for html and js is loaded. Dont wait for extrenal sources
// document.addEventListener('DOMContentLoaded', function (e) {
//   //parse : process of analyzing a string of symbols,
//   console.log('HTML parsed nad DOM tree built', e);
// });
// //?Load
// window.addEventListener('load', function (e) {
//   console.log('Page are fully loaded', e);
// });
//?beforeunload
// use toask users if they wanna leave page on tab close
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
