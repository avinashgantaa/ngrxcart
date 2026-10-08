import { createAction, props } from '@ngrx/store';
import { Product } from './product.model';

export const loadProducts = createAction('[PRODUCTS] LOAD PRODUCTS');
export const loadProductsSuccess = createAction(
  '[PRODUCTS] LOAD PRODUCTS SUCCESS',
  props<{ products: Product[] }>(),
);
export const loadProductsFailed = createAction(
  '[PRODUCTS] LOAD PRODUCTS FAILED',
  props<{ error: any }>(),
);
