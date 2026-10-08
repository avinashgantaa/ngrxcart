import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartState } from './cart.reducer';
import { selectAllProducts } from '../productState/product.selectors';
import { ItemDetails } from './cart.model';

export const cartFeatureSelector = createFeatureSelector<cartState>('CART');
export const allCartItems = createSelector(cartFeatureSelector, (state) => state.items);
export const totalQuantity = createSelector(allCartItems, (items) =>
  items.reduce((t, q) => t + q.quantity, 0),
);

export const cartItemWithDetails = createSelector(
  allCartItems,
  selectAllProducts,
  (cart, product): ItemDetails[] => {
    if (!product || product.length == 0) {
      return [];
    }
    return cart.map((e) => {
      const pduct = product.find((el) => el.id == e.productid);
      const name = pduct?.name || 'product not found';
      const price = pduct?.price || 0;
      const image = pduct?.imageUrl || 'no image found';
      const lineTotal = e.quantity * price;
      return {
        ...e,
        name,
        price,
        imageUrl: image,
        lineTotal,
      };
    });
  },
);

export const cartValue = createSelector(cartItemWithDetails, (state) =>
  state.reduce((a, i) => a + i.lineTotal, 0),
);
