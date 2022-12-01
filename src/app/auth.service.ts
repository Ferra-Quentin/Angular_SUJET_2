import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {userModel} from './users/user.model';
import {BehaviorSubject, Observable, Subscription, of as observableOf, Subject} from 'rxjs';

const baseUrl = `${environment.endpoint}login`;
const httpOption = {
  headers:new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router:Router, private http:HttpClient) { }


  async login(username: string, password: string): Promise<Observable<boolean>> {
    const utilisateur = {username:username,password:password}
    let subject = new Subject<boolean>();
    await this.http.post<userModel>(baseUrl, utilisateur, httpOption).subscribe({
          next : (utilisateurCo)=>{
            if(utilisateurCo){
              localStorage.setItem('ROLE', utilisateurCo.role)
              localStorage.setItem('Bibiotheque',String(utilisateurCo.idLibrary))
              this.loggedIn.next(true);
              subject.next(true);
            } else {
              this.loggedIn.next(false);
              subject.next(false);
            }
          },
          error : (error)=>{
            console.log("error : "+error)
            this.loggedIn.next(false);
            subject.next(false);
          }
        }
    )
    return subject.asObservable();
  }

  logOut(){
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
