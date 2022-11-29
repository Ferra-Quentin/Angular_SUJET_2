import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {LivresModel} from '../../livres/livres.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  livres:LivresModel[];

  constructor(private libraryService : LibraryService,private router:Router) { }

  ngOnInit(): void {
    this.livres = this.libraryService.getBookInLibrary();
    console.table(this.livres)
  }

  delLivre(livre:LivresModel){
    this.libraryService.removeBook(livre)
  }


  readBook(idLivre:number){
    this.router.navigate(["livre",idLivre])
  }

}
