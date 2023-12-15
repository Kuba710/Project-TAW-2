import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { DataService } from "./services/data.service";
import { BooksItemComponent } from './components/books-item/books-item.component';
import { BooksItemTitleComponent } from './components/books-item-title/books-item-title.component';
import { BooksItemImageComponent } from './components/books-item-image/books-item-image.component';
import { BooksItemDetailsComponent } from './components/books-item-details/books-item-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { AuthService } from "./services/auth.service";
import {FormsModule} from "@angular/forms";
import { AuthInterceptor } from './services/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TitleFormatDirective } from './directives/title-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksItemComponent,
    BooksItemImageComponent,
    BooksItemTitleComponent,
    BooksItemDetailsComponent,
    SummaryPipe,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddBookComponent,
    EditBookComponent,
    SearchBarComponent,
    BooksHomeComponent,
    FilterTextPipe,
    TitleFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    DataService,
    {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
