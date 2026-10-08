import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cartdata } from './cartdata';

describe('Cartdata', () => {
  let component: Cartdata;
  let fixture: ComponentFixture<Cartdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartdata],
    }).compileComponents();

    fixture = TestBed.createComponent(Cartdata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
