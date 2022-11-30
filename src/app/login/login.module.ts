import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';



const routesLogin: Routes = [
  {path:'login', component:LoginComponent},
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
    RouterModule.forChild(routesLogin)
  ]
})
export class LoginModule { }
