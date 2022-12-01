import {Injectable} from '@angular/core';
import {LivresModel} from './livres.model';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

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
    return this.http.post<LivresModel>(baseUrl,livre, httpOption)
  }

  getLivresList() {
    return this.http.get<LivresModel[]>(baseUrl, httpOption)
  }

  getLivreById(livreId: number): Observable<LivresModel | undefined> {

    return this.http.get<LivresModel>(`${environment.endpoint}book/${livreId}`, httpOption)
  }

  deleteLivre(livreId: number): Observable<LivresModel | any> {
    return this.http.get<LivresModel>(`${baseUrl}/${livreId}`, httpOption)
  }
  editLivres(livre: LivresModel): Observable<any>{

    return this.http.put<LivresModel>(`${environment.endpoint}book/${livre.id}`, livre, httpOption);
  }
}
