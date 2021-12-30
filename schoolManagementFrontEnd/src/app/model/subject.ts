import { Student } from "./student";
import { Teacher } from "./teacher";

export class Subject {

    id!:number;
    name!:string;
    teacher!:Teacher;
    students!:Student[];
    schedule!:string;
    updating!:boolean;
    
    constructor() {
    
    }
}
