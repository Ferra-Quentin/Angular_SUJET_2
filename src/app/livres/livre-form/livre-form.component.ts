import {Component, Input} from '@angular/core';
import {LivresModel} from "../livres.model";
import {LivresServiceService} from "../livres-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.css']
})
export class LivreFormComponent {
   @Input() livre : LivresModel
  constructor(
    private livreSrv : LivresServiceService,
    private router: Router
  ) { }

  onSubmit() {

     if(this.livre.id == undefined) {
        this.livreSrv.createBook(this.livre).subscribe(result => {
          this.router.navigate(['livres'])
        })
     }else {
       this.livreSrv.editLivres(this.livre).subscribe(results => {
         this.router.navigate(['livres'])
       })
     }
  }

}
