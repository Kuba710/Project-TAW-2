import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItemImageComponent } from './books-item-image.component';

describe('BooksItemImageComponent', () => {
  let component: BooksItemImageComponent;
  let fixture: ComponentFixture<BooksItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
