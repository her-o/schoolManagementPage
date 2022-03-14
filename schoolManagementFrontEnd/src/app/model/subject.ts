import { Student } from "./student";
import { Teacher } from "./teacher";

export class Subject {

    id!:number;
    name!:string;
    teacher!:Teacher | null;
    students!:Student[];
    
    constructor() {}
}
