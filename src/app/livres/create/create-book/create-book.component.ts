import { Component } from '@angular/core';
import {LivresModel} from "../../livres.model";

@Component({
  selector: 'app-create-book',
  template: `
  <app-livre-form [livre]=livre></app-livre-form>
  `,
  styles: [
  ]
})
export class CreateBookComponent  {

  livre : LivresModel = new LivresModel();

}
