import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as p from './product.reducer';
export const featureSelector = createFeatureSelector<p.ProductState>(p.productKey);

export const selectAllProducts = createSelector(featureSelector, (state) => state.products);
export const loading = createSelector(featureSelector, (state) => state.loading);
export const error = createSelector(featureSelector, (state) => state.error);
export const selectProductById = (id: string) =>
  createSelector(selectAllProducts, (products) => products.find((p) => p.id === id));
