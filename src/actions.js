export const addProduct = (product, dispatch) => {
  // Add to database here later

  // If DB add was good:
  dispatch({
    type: 'ADD_PRODUCT',
    payload: product
  });
};

export const addToCart = (item, dispatch) => {
  // add item to localStorage
  dispatch({
    type: 'ADD_TO_CART',
    payload: item
  });
};

export const removeFromCart = (item, dispatch) => {
  // remove item from localStorage
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: item
  });
};
