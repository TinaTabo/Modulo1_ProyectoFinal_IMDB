//-- Importar clases
import { Professional } from "./professional";

//-- Pruebas
let pro1:Professional = new Professional("Lola",25,70,165,false,"Española",1,"Actriz");
let pro2:Professional = new Professional("Jin",30,80,180,false,"Sur Coreana",0,"Cantante");
let pro3:Professional = new Professional("James",28,95,190,false,"Americano",2,"Actor");

console.log(`--------------PRINT-ATTRIBUTES----------------`);

console.log(`-------pro1-------`);
pro1.printAttributes();
console.log(`-------pro2-------`);
pro2.printAttributes();
console.log(`-------pro3-------`);
pro3.printAttributes();

console.log(`----------------------------------------------`);