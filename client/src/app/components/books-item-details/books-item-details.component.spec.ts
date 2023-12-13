 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemDetailsComponent } from './books-item-details.component';

describe('BooksItemDetailsComponent', () => {
  let component: BooksItemDetailsComponent;
  let fixture: ComponentFixture<BooksItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
