import { createReducer, on } from '@ngrx/store';
import { CartItem } from './cart.model';
import * as action from './cart.action';

export interface cartState {
  items: CartItem[];
}

export const intialCart: cartState = {
  items: [],
};
export const cartReducer = createReducer(
  intialCart,
  on(action.addProduct, (state, { id }) => {
    const itemExisted = state.items.findIndex((item) => item.productid === id);
    let updatedQuantity: CartItem[];
    if (itemExisted > -1) {
      updatedQuantity = state.items.map((element, index) =>
        index === itemExisted ? { ...element, quantity: element.quantity + 1 } : element,
      );
    } else {
      updatedQuantity = [...state.items, { productid: id, quantity: 1 }];
    }

    return {
      ...state,
      items: updatedQuantity,
    };
  }),
  on(action.removeProduct, (state, { id }) => {
    const updatedQuantity = state.items.filter((element) => element.productid !== id);
    return {
      ...state,
      items: updatedQuantity,
    };
  }),
  on(action.increaseQuantity, (state, { id }) => {
    const updated = state.items.map((element) =>
      element.productid === id ? { ...element, quantity: element.quantity + 1 } : element,
    );
    return { ...state, items: updated };
  }),
  on(action.decreaseQuantity, (state, { id }) => {
    let findItem = state.items.find((element) => element.productid === id);
    let updated: CartItem[];
    if (findItem && findItem.quantity > 1) {
      updated = state.items.map((element) =>
        element.productid === id ? { ...element, quantity: element.quantity - 1 } : element,
      );
    } else {
      updated = state.items.filter((element) => element.productid !== id);
    }
    return { ...state, items: updated };
  }),
  on(action.clearCart, (state) => {
    return { ...state, items: [] };
  }),
);
