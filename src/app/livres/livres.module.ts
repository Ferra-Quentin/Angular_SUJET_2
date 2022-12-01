import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
// route import
import { LivresListComponent } from './livres-list/livres-list.component';
import { LivreReadComponent } from './livre-read/livre-read.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
// check security
import {AuthGuard} from '../auth.guard';
import { LivreFormComponent } from './livre-form/livre-form.component';
import {FormsModule} from "@angular/forms";
import { CreateBookComponent } from './create/create-book/create-book.component';



const livresRoute:Routes = [
  {path:'livres',component:LivresListComponent,canActivate:[AuthGuard]},
  {path:'livre/:id',component:LivreReadComponent,canActivate:[AuthGuard]},
  {path:'livre-edit/:id',component:BookDetailComponent,canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    LivresListComponent,
    LivreReadComponent,
    BookDetailComponent,
    LivreFormComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(livresRoute),
    FormsModule
  ]
})
export class LivresModule { }
