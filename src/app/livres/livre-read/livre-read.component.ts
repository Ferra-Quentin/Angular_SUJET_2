import { Component, OnInit } from '@angular/core';
import {LivresModel} from '../livres.model';
import {LivresServiceService} from '../livres-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../pages/page.service';
import {pageModel} from '../../pages/page.model';


@Component({
  selector: 'app-livre-read',
  templateUrl: './livre-read.component.html',
  styleUrls: ['./livre-read.component.css']
})
export class LivreReadComponent implements OnInit {

  pagesLivre:pageModel[]|undefined;

  constructor(private router:Router, private route: ActivatedRoute, private livreService:LivresServiceService, private pageService : PageService) {  }

  ngOnInit(): void {
    let idLivre = Number(this.route.snapshot.paramMap.get('id'))
    this.pageService.getPageByLivreID(idLivre).subscribe((resultat)=>{
      this.pagesLivre=resultat
    });
  }

}
