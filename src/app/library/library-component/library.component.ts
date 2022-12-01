import {Component, OnInit} from '@angular/core';
import {LibraryService} from '../library.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

    toutLesBook: any[] = []
    livres: any[] = []
    gender: string[] = []
    genreSelectionner: string[] = []
    authorName:string = ''

    constructor(private libraryService: LibraryService, private router: Router) {
    }

    ngOnInit(): void {
        this.libraryService.getBookInLibrary(localStorage.getItem('Bibiotheque')).subscribe(result => {
            this.livres = result
            this.toutLesBook = result
            this.livres.forEach(livre => {
                livre.Book.type = livre.Book.type.split(',')
                livre.Book.type.forEach((type: any) => {
                    if (this.gender.indexOf(type) == -1) {
                        this.gender.push(type)
                    }
                })
            })
        });
    }

    delLivre(livre: any) {
        this.livres.splice(this.livres.indexOf(livre), 1)
        this.libraryService.removeBook(livre.Book.id, Number(localStorage.getItem('Bibiotheque'))).subscribe(result => {
        })
    }


    readBook(idLivre: number) {
        this.router.navigate(["livre", idLivre])
    }

    genreCocher(genre: string, activer: boolean) {
        if (activer) {
            this.genreSelectionner.push(genre)
        } else {
            this.genreSelectionner.splice(this.genreSelectionner.indexOf(genre), 1)
        }
        this.filterByGender()
    }

    filterByGender() {
        this.livres = []
        this.genreSelectionner.forEach(genre => {
            this.toutLesBook.forEach(livre => {
                if (livre.Book.type.indexOf(genre) != -1) {
                    this.livres.push(livre)
                }
            })
        })
        if (this.livres.length == 0) {
            this.livres = this.toutLesBook
        }
    }

    searchByAuthorName(name:string){
        this.livres=[]
        this.toutLesBook.forEach(livre=>{
            if(livre.Book.author.includes(name)){
                this.livres.push(livre)
            }
        })
        this.livres.length == 0 ? this.livres = this.toutLesBook:null
    }



}
