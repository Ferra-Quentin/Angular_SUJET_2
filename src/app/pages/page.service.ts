import { Injectable } from '@angular/core';
import {pageModel} from './page.model';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const baseUrl = `${environment.endpoint}pages/`;
const httpOption = {
  headers:new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PageService {



  pagesLivre:pageModel[]=[];

  constructor(private http: HttpClient) { }


  getPageByLivreID(idLivre:number){
    return this.http.get<pageModel[]>(baseUrl+idLivre,httpOption)
  }
}
