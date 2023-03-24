//-- Importar clases
import { Professional } from "./professional";
import { Movie } from "./movie";

//-- Pruebas
let peli:Movie = new Movie("Avatar",2009,"American","Ciencia ficción. Aventuras. Bélico. Acción. Fantástico. Romance.");

console.log(`-------------------------------------`);
peli.printAttributes();
console.log(`-------------------------------------`);

let sam:Professional = new Professional("Sam Worthington",46,90,185,false,"American",0,"Actor");
let zoe:Professional = new Professional("Zoe Saldaña",44,60,170,false,"American",0,"Actress");
let sigourney:Professional = new Professional("Sigourney Weaver",73,68,175,false,"American",0,"Actress");
let actors:Professional[] = [sam,zoe,sigourney];
peli.actors = actors;

let james:Professional = new Professional("James Cameron",68,75,170,false,"american",3,"Director");
peli.director = james;
peli.writer = james;
peli.language = "English";
peli.plataforma =  "Disney+";
peli.isMCU = false;
peli.mainCharacterName = "Jake Sully";
peli.producer = "James Cameron";
peli.distributor = "20th Century Fox";

console.log(`-------------------------------------`);
peli.printAttributes();
console.log(`-------------------------------------`);

//-- Exportar peli
export {peli};
