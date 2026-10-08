import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as cart from '../../store/cartState/cart.model';
import * as selector from '../../store/cartState/cart.selector';
import * as action from '../../store/cartState/cart.action';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-cartdata',
  styleUrl: './cartdata.css',
  templateUrl: './cartdata.html',
})
export class Cartdata {
  private store = inject(Store);
  cartItems$!: Observable<cart.ItemDetails[]>;
  cartValue$!:Observable<number>
  constructor() {
    this.cartItems$ = this.store.select(selector.cartItemWithDetails);
    this.cartValue$=this.store.select(selector.cartValue)
  }

  increment(id: string) {
    this.store.dispatch(action.increaseQuantity({ id }));
  }

  decrement(id: string) {
    this.store.dispatch(action.decreaseQuantity({ id }));
  }

  removeItem(id: string) {
    this.store.dispatch(action.removeProduct({ id }));
  }

  clearCart() {
    this.store.dispatch(action.clearCart());
  }
}
