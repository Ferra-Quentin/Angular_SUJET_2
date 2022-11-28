import { Component, OnInit } from '@angular/core';
import {LivresModel} from '../livres.model';
import {LivresServiceService} from '../livres-service.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements OnInit {

  livres : LivresModel[];

  constructor() { }

  ngOnInit(): void {
    this.livres = LivresServiceService.getLivresList();
  }

}
