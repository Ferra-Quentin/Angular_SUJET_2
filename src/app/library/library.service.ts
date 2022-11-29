import { Injectable } from '@angular/core';
import {libraryBook} from './library-book/library-book-mock';
import {LibraryBookModel} from './library-book/library-book.model'
import {LivresModel} from '../livres/livres.model';
import {listLivres} from '../livres/livres-mock';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  toutLesLivres:LivresModel[] = listLivres

  livresLibrary:LibraryBookModel[] = libraryBook;
  livres:LivresModel[] = []

  constructor() { }

  getBookInLibrary(){
    this.livresLibrary.forEach(book => {
      if(book.library==1){
        this.toutLesLivres.forEach(livre=>{
          if(livre.id == book.livres){
            this.livres.push(livre)
          }
        })
      }
    } )
  return this.livres
  }

  removeBook(livre:LivresModel){
    this.livres.splice(this.livres.indexOf(livre),1);
  }
}
