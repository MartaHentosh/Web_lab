export const addToCart = (elementData, amount) => {
  console.log('Adding to cart:', elementData, amount);
  return {
    type: 'ADD_TO_CART',
    payload: {
      elementData,
      amount,
    },
  };
};

  export const removeFromCart = (elementDataId) => ({
    type: 'REMOVE_FROM_CART',
    payload: elementDataId,
  });

  export const plus = (elementDataId) => ({
    type: 'PLUS',
    payload: elementDataId,
  });

  export const minus = (elementDataId) => ({
    type: 'MINUS',
    payload: elementDataId,
  });
  