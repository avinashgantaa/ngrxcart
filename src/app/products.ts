import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { Product } from './store/productState/product.model';

@Injectable({ providedIn: 'root' })
export class Products {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/products';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      delay(1000),
      catchError((error) => throwError(() => error)),
    );
  }
}
