//-- Importar módulos
import * as readLineSync from "readline-sync"; //-- Leer por linea de comandos.
import 'colors';

//-- Importar clases
import { Professional } from "./professional";
import { Imdb } from "./imdb";

//-- Crear nuevo perfil profesional con los datos obtenidos por consola.
let pro:Professional = new Professional("",0,0,0,false,"",0,"");
console.log("Rellene los datos del nuevo Profesional (pro) que se piden a continuacion: ");
for (const key in pro) {
    if (key != "printAttributes") {
        pro[key] = readLineSync.question(`${key}: `);
    }
}
console.log(`-------------Datos-del-pro-------------`.red);
console.log(pro);

//-- Añadir profesional a ficha de una pelicula en imdb.
let imdb:Imdb = new Imdb([]);
imdb = imdb.obtenerInstanciaIMDB("imdbBBDD");
console.log(imdb);

if (pro != null) {
    for (const peli in imdb.peliculas) {
        let add = readLineSync.question(`Desea incorporar a ${pro.name} a la pelicula ${imdb.peliculas[peli].title}? (yes/no): `);
        if (add == "yes") {
            imdb.peliculas[peli].actors.push(pro);
            let imdb2 = new Imdb(imdb.peliculas);
            imdb2.escribirEnFicheroJSON("imdbBBDD_2");
            console.log(`-------${pro.name} se ha añadido correctamente------`.yellow);
        }
        if (add != "no") {
            console.log(`Respuesta incorrecta, debe introducir: yes o no`);
        }
    }
}
