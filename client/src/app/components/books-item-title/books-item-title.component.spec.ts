import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemTitleComponent } from './books-item-title.component';

describe('BooksItemTitleComponent', () => {
  let component: BooksItemTitleComponent;
  let fixture: ComponentFixture<BooksItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksItemTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
