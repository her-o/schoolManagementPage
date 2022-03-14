import { Subject } from "./subject";

export class Student {
  
    id!:number;
    firstName!:string;
    lastName!:string;
    name:string = `${this.firstName} ${this.lastName}`
    email!:string;
    phoneNumber!:string;
    subjects!:Subject[];

    constructor(){}
}
