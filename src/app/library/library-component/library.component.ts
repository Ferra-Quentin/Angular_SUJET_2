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

  livres:LivresModel[]=[];

  constructor(private libraryService : LibraryService,private router:Router) { }

  ngOnInit(): void {
   this.libraryService.getBookInLibrary(1).subscribe(result=>{
      this.livres=result
    });
  }

  delLivre(livre:LivresModel){
    this.livres.splice(this.livres.indexOf(livre),1)
    this.libraryService.removeBook(livre.id,1).subscribe(result=>{

    })
  }


  readBook(idLivre:number){
    this.router.navigate(["livre",idLivre])
  }

}
