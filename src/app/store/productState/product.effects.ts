import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Products } from '../../products';
import * as actions from './product.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  private action = inject(Actions);
  private service = inject(Products);
  productEffect$ = createEffect(() =>
    this.action.pipe(
      ofType(actions.loadProducts),
      exhaustMap(() =>
        this.service.getAllProducts().pipe(
          map((products) => actions.loadProductsSuccess({ products })),
          catchError((error) => of(actions.loadProductsFailed({ error }))),
        ),
      ),
    ),
  );
}
