import { Injectable } from '@angular/core';
import {LivresModel} from '../livres/livres.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {LibraryBookModel} from './library-book/library-book.model';
import {libraryModel} from './library.model';

const baseUrl = `${environment.endpoint}booksLibrary/`;
const httpOption = {
  headers:new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private http:HttpClient) { }
  libraryBook:LivresModel[]

  getBookInLibrary(idLibrary: string | null){
    return this.http.get<any[]>(baseUrl+idLibrary,httpOption)
  }

  removeBook(idLivre:number,idLibrary:number){
    return this.http.delete(`${environment.endpoint}bookLibrarys/${idLivre}/${idLibrary}`,httpOption)
  }

  bookAsBeenRead(idLivre : number,idLib:number){
    const bookLibrary = {bookId:idLivre,libraryId:localStorage.getItem('Bibiotheque'),read:true}
    return this.http.put<LibraryBookModel>(`${environment.endpoint}booksLibrary/${idLib}`,bookLibrary,httpOption)
  }
}
