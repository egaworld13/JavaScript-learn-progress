//? Importing module
// All imports statement on top of file
// import { addToCart, cart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(cart);
// console.log(price, tq);

console.log('Importing module');
// //? import all form shoppingCart as object
// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart);
// ShoppingCart.addToCart('bread', 5);

//*Import default export(mix)
import add, { cart } from './shoppingCart.js';

// add('pizza', 2);
// add('bread', 3);
// add('apples', 10);
// add('pizza', 3);
// console.log(cart);

//*AWAIT OUTSIDE OF ASYNC FUNCTION!
// const result = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await result.json();
// console.log(data);

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
//Not very clean
lastPost.then(res => console.log(res));

//better solution
const lastPost2 = await getLastPost();
// console.log(lastPost2);
