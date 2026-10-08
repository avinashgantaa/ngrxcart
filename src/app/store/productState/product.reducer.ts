import { createReducer, on } from '@ngrx/store';
import { Product } from './product.model';
import * as productAction from './product.actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productKey = 'PRODUCT';
export const productReducer = createReducer(
  initialState,
  on(productAction.loadProducts, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(productAction.loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      loading: false,
      error: null,
    };
  }),
  on(productAction.loadProductsFailed, (state, { error }) => {
    return {
      ...state,
      products: [],
      loading: false,
      error,
    };
  }),
);
