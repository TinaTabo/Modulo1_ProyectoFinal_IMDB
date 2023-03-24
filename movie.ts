//-- Importar clases
import { Professional } from "./professional";

//-- Definición de clases
export class Movie{
    //-- Atributos
    title: string;
    releaseYear:number;
    actors: Professional[];
    nacionality: string;
    director: Professional;
    writer: Professional;
    language: string;
    plataforma: string;
    isMCU: boolean;
    mainCharacterName: string;
    producer: string;
    distributor: string;
    genre: string;

    //-- Constructor
    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    //-- Métodos
    printAttributes():void{
        console.log(`Title = ${this.title}`);
        console.log(`Release Year = ${this.releaseYear}`);
        console.log(`Actors = ${this.actors}`);
        console.log(`Nacionality = ${this.nacionality}`);
        console.log(`Director = ${this.director}`);
        console.log(`Writer = ${this.writer}`);
        console.log(`Language = ${this.language}`);
        console.log(`Plataforma = ${this.plataforma}`);
        console.log(`Is MCU = ${this.isMCU}`);
        console.log(`Main character name = ${this.mainCharacterName}`);
        console.log(`Producer = ${this.producer}`);
        console.log(`Distributor = ${this.distributor}`);
        console.log(`Genre = ${this.genre}`);
    }
}