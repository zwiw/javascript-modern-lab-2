
export const addProduct = (cart, product) => {
  const existing = cart.find(({ id }) => id === product.id);

  if (existing) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );
  }

  return [...cart, product];
};

export const removeProduct = (cart, productId) => {
  if (!cart.find(({ id }) => id === productId)) {
    throw new Error(`Produsul cu id ${productId} nu există în coș`);
  }

  return cart.filter(({ id }) => id !== productId);
};

export const updateQuantity = (cart, productId, quantity) => {
  if (!cart.find(({ id }) => id === productId)) {
    throw new Error(`Produsul cu id ${productId} nu există în coș`);
  }

  if (quantity < 1) {
    throw new Error("Cantitatea trebuie să fie cel puțin 1");
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
};

export const calculateTotal = (cart) =>
  cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
