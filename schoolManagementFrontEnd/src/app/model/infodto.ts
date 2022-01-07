import { Schedule } from "./schedule";
import { Teacher } from "./teacher";

export class Infodto {

    id!:number;
    name!:string;
    email!:string;
    teacher!:Teacher;
    schedule!:Schedule;

    constructor(){}
}
