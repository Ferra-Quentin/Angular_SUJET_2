import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LibraryComponent } from './library-component/library.component';

const libraryRoutes: Routes = [
  {path:'bibliothèque',component:LibraryComponent}
];
@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(libraryRoutes)
  ]
})
export class LibraryModule { }
