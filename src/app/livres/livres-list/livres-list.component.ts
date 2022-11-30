import { Component, OnInit } from '@angular/core';
import {LivresModel} from '../livres.model';
import {LivresServiceService} from '../livres-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements OnInit {

  livres : LivresModel[];

  constructor(private router:Router,private livreService: LivresServiceService) { }

  ngOnInit(): void {
    this.livreService.getLivresList().subscribe((resultat)=>{
      this.livres = resultat;
    });
  }

  addToLibrary(idLivre:number){

  }

  readBook(idLivre:number){
    this.router.navigate(["livre",idLivre])
  }

}
