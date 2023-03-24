//-- Importar módulos
import { writeFileSync,readFileSync } from "fs";
import "colors";

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

    //-- Métodos
    escribirEnFicheroJSON(nombreFichero:string):void{
        console.log(`-----------Creando-Fichero-JSON--------------`.red);
        let imdbJSON:string = JSON.stringify(this.peliculas);
        nombreFichero = nombreFichero.concat(".json");
        writeFileSync(nombreFichero,imdbJSON);
        console.log(`------Fichero-JSON-Creado-Correctamente------`.blue);
    }

    obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        nombreFichero = nombreFichero.concat(".json");
        let imdbData = readFileSync(nombreFichero);
        //-- Pasar los datos obtenidos a formato JSON.
        let imdb = JSON.parse(imdbData.toString());
        console.log(`-----------Leyendo-Fichero-JSON--------------`.yellow);
        return imdb;
    }
}