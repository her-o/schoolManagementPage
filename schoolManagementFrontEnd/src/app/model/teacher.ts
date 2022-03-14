import { Subject } from "./subject";

export class Teacher {

    id!:number;
    firstName!:string;
    lastName!:string;
    email!:string;
    subjects!:Subject[];
    
    constructor(){}
}
