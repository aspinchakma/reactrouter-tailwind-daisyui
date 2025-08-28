const product = [
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
];

const totalPrice = product.reduce((accu, item) => accu + item.price);
console.log(totalPrice);