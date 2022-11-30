import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;

  constructor(private router:Router) { }

  login(username:string,password:string):boolean{
    this.isLoggedIn=(username=='quentin' && password=='quentin');
    return this.isLoggedIn;
  }

  logOut(){
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
