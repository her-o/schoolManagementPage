import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {


  constructor() { }

  abstract add(entity:any): void;
  abstract update(id:number, object:any): void;
  abstract delete(entity:any): void;
  abstract getAll(): Observable<any>;
  abstract getById(id:string): Observable<any>;
  abstract updateById(id:number, object:any): Observable<any>;
  abstract deleteById(id:number): Observable<any>;

}
