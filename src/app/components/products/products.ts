import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../store/productState/product.model';
import * as p from '../../store/productState/product.selectors';
import * as actions from '../../store/productState/product.actions';
import { AsyncPipe, JsonPipe } from '@angular/common';
import * as cartaction from '../../store/cartState/cart.action';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private store = inject(Store);
  fetchProducts$!: Observable<Product[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor() {
    this.fetchProducts$ = this.store.select(p.selectAllProducts);
    this.loading$ = this.store.select(p.loading);
    this.error$ = this.store.select(p.error);
  }

  ngOnInit(): void {
    this.store.dispatch(actions.loadProducts());
  }

  addItem(id: string) {
    this.store.dispatch(cartaction.addProduct({ id }));
  }
}
