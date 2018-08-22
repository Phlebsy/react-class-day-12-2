export const addProduct = (product, dispatch) => {
  // Add to database here later

  // If DB add was good:
  dispatch({
    type: 'ADD_PRODUCT',
    payload: product
  });
};
