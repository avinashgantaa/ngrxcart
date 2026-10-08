import { createAction, props } from '@ngrx/store';

export const addProduct = createAction('[CART] ADD PRODUCT', props<{ id: string }>());
export const removeProduct = createAction('[CART] REMOVE PRODUCT', props<{ id: string }>());
export const increaseQuantity = createAction('[CART] INCREASE QUANTITY', props<{ id: string }>());
export const decreaseQuantity = createAction('[CART] DECREASE QUANTITY', props<{ id: string }>());
export const clearCart = createAction('[CART] CLEAR CART');
