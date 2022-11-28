import {LivresModel} from './livres.model';

export const listLivres: LivresModel[] = [
    {
        id: 1,
        name: "Bleu",
        author:"Inconnu",
        releaseDate: new Date('2022/01/28'),
        type: ["Aventure", "Romance"],
        downloadNumber: 150,
        readNumber: 500

    },
    {
        id: 2,
        name: "Rouge",
        author:"Quentin",
        releaseDate: new Date('2012/11/01'),
        type: ["Horreur", "Aventure", "Romance"],
        downloadNumber: 20,
        readNumber: 15

    },
    {
        id: 3,
        name: "Vert",
        author:"Vincent",
        releaseDate: new Date('2022/12/15'),
        type: ["Aventure", "Romance","Découverte"],
        downloadNumber: 186,
        readNumber: 254

    }
]
