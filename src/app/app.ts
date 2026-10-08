import { Component, inject, OnInit, signal } from '@angular/core';
import { Products } from './components/products/products';
import { Cartdata } from './components/cartdata/cartdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Products, Cartdata]
})
export class App {
  protected readonly title = signal('ngrx-store');
 
}
