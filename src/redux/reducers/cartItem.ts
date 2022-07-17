import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../constants';

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
    case CLEAR_CART:
      return (state = []);
  }
  return state;
};
