import { Injectable } from '@angular/core';
import {listLivres} from './livres-mock'
import {LivresModel} from './livres.model';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LibraryBookModel} from '../library/library-book/library-book.model';

const baseUrl = `${environment.endpoint}books`;
const httpOption = {
  headers:new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivresServiceService {

  livres:LivresModel[] = []

  constructor(private http: HttpClient) { }

  getLivresList() {
    return this.http.get<LivresModel[]>(baseUrl,httpOption)
  }

  addBookInLibrary(idLivre:number){
    const bookLibrary = {bookId:idLivre,libraryId:localStorage.getItem('Bibiotheque'),read:false}
    this.http.post<LibraryBookModel>(`${environment.endpoint}bookLibrary`,bookLibrary,httpOption).subscribe(result=>{
    })
  }
}
