//? exporting module
//? named export
console.log('Exporting module');

const shoppingCart = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 200;
const totalQuantity = 20;

export { totalPrice, totalQuantity as tq };

//*Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
}
