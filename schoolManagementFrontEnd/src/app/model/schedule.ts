export class Schedule {

    day!:string;
    startHour!:number;
    startMinutes!:number;
    endHour!:number;
    endMinutes!:number;

    constructor(){}
    
    scheduleToString():string {
        return `${this.day} | ${this.startHour}:${this.startMinutes} - ${this.endHour}:${this.endMinutes}`; 
    }

}
