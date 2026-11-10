
import {
  addProduct,
  removeProduct,
  updateQuantity,
  calculateTotal
} from "./cart.js";

const show = (cart) => {
  cart.forEach(({ id, name, price, quantity }) => {
    console.log(`#${id} ${name}: ${price} lei x ${quantity}`);
  });

  console.log(`Total: ${calculateTotal(cart)} lei\n`);
};

let cart = [];

cart = addProduct(cart, {
  id: 1,
  name: "Pâine",
  price: 12,
  quantity: 2
});

cart = addProduct(cart, {
  id: 2,
  name: "Lapte",
  price: 25,
  quantity: 1
});

cart = addProduct(cart, {
  id: 1,
  name: "Pâine",
  price: 12,
  quantity: 1
});

console.log("După adăugare:");
show(cart);

cart = updateQuantity(cart, 2, 3);

console.log("După modificarea cantității:");
show(cart);

cart = removeProduct(cart, 1);

console.log("După ștergere:");
show(cart);

try {
  cart = removeProduct(cart, 99);
} catch (error) {
  console.log(`Eroare: ${error.message}`);
}
