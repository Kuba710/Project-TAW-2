import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from "./components/books/books.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { BooksItemDetailsComponent } from "./components/books-item-details/books-item-details.component";
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
  	path: '',
  	component: BooksHomeComponent,

    },
    {
    path: 'books/detail/:id',
    component: BooksItemDetailsComponent,
    canActivate: [AuthGuard]
    },
    {
    path: 'login',
    component: LoginComponent
    },
    {
    	path: 'signup',
    	component: SignupComponent
    },
    {
      path: 'add',
      component: AddBookComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'edit/:id',
      component: EditBookComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
