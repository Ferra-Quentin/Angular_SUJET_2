import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LivresModule} from './livres/livres.module';
import { PagesComponent } from './pages/pages.component';
import {LibraryModule} from './library/library.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
      LivresModule,
      LibraryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
