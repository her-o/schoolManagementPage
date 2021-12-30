import { Subject } from "./subject";

export class Student {

    id!:number;
    name!:string;
    email!:string;
    subjects!:Subject[];

    constructor(){}
}
