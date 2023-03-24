//-- Importar módulos para lectura/escritura de ficheros.


//-- Importar clases
import { Movie } from "./movie";

//-- Definición de clases
export class Imdb{
    //-- Atributos
    peliculas: Movie[];

    //-- Constructor
    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}