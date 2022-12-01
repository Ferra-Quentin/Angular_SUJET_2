import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LivresListComponent } from './livres-list/livres-list.component';
import { LivreReadComponent } from './livre-read/livre-read.component';
import {AuthGuard} from '../auth.guard';


const livresRoute:Routes = [
  {path:'livres',component:LivresListComponent,canActivate:[AuthGuard]},
  {path:'livre/:id/:idLib',component:LivreReadComponent,canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    LivresListComponent,
    LivreReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(livresRoute)
  ]
})
export class LivresModule { }
