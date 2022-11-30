import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  errMessage : string = '';

  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    const login = this.authService.login(this.username,this.password);
    if(login){
      this.router.navigate(['livres'])
    }
    else{
      this.errMessage="Utilisateur ou mot de passe incorrecte";
    }
  }

}
