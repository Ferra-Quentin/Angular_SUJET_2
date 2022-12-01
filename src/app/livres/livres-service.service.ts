import {Injectable} from '@angular/core';
import {LivresModel} from './livres.model';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {LibraryBookModel} from '../library/library-book/library-book.model';


const baseUrl = `${environment.endpoint}books`;
const httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LivresServiceService {

  livres: LivresModel[] = []

  constructor(private http: HttpClient) {
  }
  createBook( livre : LivresModel) : Observable<LivresModel>{
    return this.http.post<LivresModel>(`${environment.endpoint}book/`,livre, httpOption)
  }

  getLivresList() {
    return this.http.get<LivresModel[]>(baseUrl, httpOption)
  }

  getLivreById(livreId: number): Observable<LivresModel | undefined> {

    return this.http.get<LivresModel>(`${environment.endpoint}book/${livreId}`, httpOption)
  }

  deleteLivre(livreId: number){
    return this.http.delete(`${environment.endpoint}book/${livreId}`, httpOption)
  }
  editLivres(livre: LivresModel): Observable<any>{

    return this.http.put<LivresModel>(`${environment.endpoint}book/${livre.id}`, livre, httpOption);
  }

  addBookInLibrary(idLivre:number){
    const bookLibrary = {bookId:idLivre,libraryId:localStorage.getItem('Bibiotheque'),read:false}
    this.http.post<LibraryBookModel>(`${environment.endpoint}bookLibrary`,bookLibrary,httpOption).subscribe(result=>{
    })
  }
}
