import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Book_Front';

  constructor(private authService:AuthService) {
  }
  isLogedIn = this.authService.loggedIn.value

  ngOnInit(): void {
    localStorage.clear()
  }

}
