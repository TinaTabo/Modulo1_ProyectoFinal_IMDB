//-- Importar modulos
import { writeFileSync,readFileSync } from "fs";
import "colors";

//-- Importar clases
import { Professional } from "./professional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";
import { peli } from "./testMovie";

//-- Pruebas
//-- Crear otra ficha de una pelicula.
let peli2:Movie = new Movie("Shrek",2001,"American","Animation");
peli2.actors = [
    new Professional("Mike Myers",59,70,173,false,"Canadian, American",0,"Voice Actor"),
    new Professional("Cameron Diaz",50,56,174,false,"American",0,"Actress"),
    new Professional("Eddie Murphy",61,91,175,false,"American",0,"Actor")
]
peli2.director = new Professional("Andrew Adamson",56,84,177,false,"New Zealander",0,"Director");
peli2.writer = new Professional("Terry Rossio",62,92,173,false,"American",0,"Writter");
peli2.language = "English";
peli2.plataforma = "Amazon Prime Video";
peli2.isMCU = false;
peli2.mainCharacterName = "Shrek";
peli2.producer = "Jeffrey Katzenberg";
peli2.distributor = "DreamWorks";

//-- Crear base de datos de pelicular utilizando la clase imdb.
let pelis:Movie[] = [peli,peli2];
let imdb:Imdb = new Imdb(pelis);

//-- Convertir imdb a una cadena de texto JSON --> string JSON
let imdbJSON:string = JSON.stringify(imdb);
console.log(imdbJSON);

//-- Guardar imbdJSON en un fichero JSON
function saveFile(){
    console.log(`-----------Creando-Fichero-JSON--------------`.red);
    writeFileSync("imdbBBDD.json",imdbJSON);
    console.log(`------Fichero-JSON-Creado-Correctamente------`.blue);
}
saveFile();

//-- Leer el fichero imdbBBDD.json y almacenarlo en una instancia de la clase Imdb.
function readFile() {
    let imdbData = readFileSync("imdbBBDD.json");
    //-- Pasar los datos obtenidos a formato JSON.
    let imdb = JSON.parse(imdbData.toString());
    console.log(`-----------Leyendo-Fichero-JSON--------------`.yellow);
    console.log(imdb);
}
readFile();

//-- Exportar base de datos y peli2
export {imdb, peli2};