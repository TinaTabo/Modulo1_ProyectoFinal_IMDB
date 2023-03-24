//-- Definicion de clases
export class Professional{
    //-- Atributos
    name: string;
    age: number;
    weight: number;
    height: number;
    isRetired: boolean;
    nationality: string;
    oscarsNumber: number;
    profession: string;

    //-- Constructor
    constructor(name:string, age:number, weight:number, height:number, isRetired:boolean, nationality:string,
                oscarsNumber:number, profession:string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAttributes():void{
        console.log(`Name = ${this.name}`);
        console.log(`Age = ${this.age}`);
        console.log(`Weight = ${this.weight}`);
        console.log(`Height = ${this.height}`);
        console.log(`IsRetired = ${this.isRetired}`);
        console.log(`Nationality = ${this.nationality}`);
        console.log(`OscarsNumber = ${this.oscarsNumber}`);
        console.log(`Profession = ${this.profession}`);
    }
}