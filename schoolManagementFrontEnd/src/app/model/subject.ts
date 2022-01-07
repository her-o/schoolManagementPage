import { Schedule } from "./schedule";
import { Student } from "./student";
import { Teacher } from "./teacher";

export class Subject {

    id!:number;
    name!:string;
    teacher!:Teacher;
    teacherName!:string;
    students!:Student[];
    updating!:boolean;
    
    constructor() {}
}
