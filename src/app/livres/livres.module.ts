import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LivresListComponent } from './livres-list/livres-list.component';


const livresRoute:Routes = [
  {path:'livres',component:LivresListComponent}
]


@NgModule({
  declarations: [
    LivresListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(livresRoute)
  ]
})
export class LivresModule { }
