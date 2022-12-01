import { Component, OnInit } from '@angular/core';
import {LivresServiceService} from '../livres-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../pages/page.service';
import {pageModel} from '../../pages/page.model';
import {LibraryService} from '../../library/library.service';


@Component({
  selector: 'app-livre-read',
  templateUrl: './livre-read.component.html',
  styleUrls: ['./livre-read.component.css']
})
export class LivreReadComponent implements OnInit {

  pagesLivre:pageModel[]|undefined;
  increment:number = 0;
  maxIncrement : number = 0;
  idLib : number = 0

  constructor(private router:Router, private route: ActivatedRoute, private livreService:LivresServiceService, private pageService : PageService, private LibraryService : LibraryService) {  }

  ngOnInit(): void {
    let idLivre = Number(this.route.snapshot.paramMap.get('id'))
     this.idLib = Number(this.route.snapshot.paramMap.get('idLib'))
    this.pageService.getPageByLivreID(idLivre).subscribe((resultat)=>{
      this.pagesLivre=resultat
      this.maxIncrement=this.pagesLivre.length
    });
  }

  validBookInLibrary(idLivre:number){
    console.log(this.pagesLivre)
    this.validBook(idLivre)
    this.increment = this.increment+1

  }

  validBook(idLivre:number){
    this.LibraryService.bookAsBeenRead(idLivre,this.idLib).subscribe(result=>{
      console.log(result)
    })
  }

}
