import {Component, OnInit} from '@angular/core';
import {LivresModel} from "../livres.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LivresServiceService} from "../livres-service.service";
import {LivreFormComponent} from "../livre-form/livre-form.component";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  livre: LivresModel

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreSrv: LivresServiceService
  ) {
  }

  ngOnInit(): void {
    const livreId: number = Number(this.route.snapshot.paramMap.get('id'));
    if(livreId){
      this.livreSrv.getLivreById(livreId).subscribe(results => {
        console.log(results,'resultat')
        if(results){
          this.livre = results;
        }else {
          this.router.navigate(["livres"])
        }
    })
    }else {
      this.router.navigate(["livres"])
    }
    // add route to edit
    // add function to list
    // add route to post
  }


}
