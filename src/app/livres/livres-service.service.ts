import { Injectable } from '@angular/core';
import {listLivres} from './livres-mock'
import {LivresModel} from './livres.model';

@Injectable({
  providedIn: 'root'
})
export class LivresServiceService {

  constructor() { }

  //GET ALL
  static getLivresList() {
    return listLivres;
  }
}
