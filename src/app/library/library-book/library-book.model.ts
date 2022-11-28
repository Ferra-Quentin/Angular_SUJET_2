import {LivresModel} from '../../livres/livres.model';
import {libraryModel} from '../library.model';

export class LibraryBookModel{
    id:number;
    livres:LivresModel;
    library:libraryModel;
    etat:boolean;
}
