import { Injectable } from '@angular/core';
import {pageModel} from './page.model';
import {lesPages} from './page-mock';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  pagesLivre:pageModel[]=[];

  constructor() { }

  getPageByLivreID(idLivre:number){
    lesPages.forEach(page => {
      if(page.livre == idLivre){
        this.pagesLivre.push(page);
      }
    })
    return this.pagesLivre;
  }
}
