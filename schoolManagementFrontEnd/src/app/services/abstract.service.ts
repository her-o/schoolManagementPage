import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Infodto } from '../model/infodto';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService {

  listUrl!:string;
  
  constructor() { }

  abstract manageInfo(info:Infodto): void;
  abstract add(object:any): void;
  abstract update(id:number, object:any): void;
  abstract delete(id:number): void;
  abstract getAll(): Observable<any>;
  abstract getById(id:string): Observable<any>;
  abstract updateById(id:number, object:any): Observable<any>;
  abstract deleteById(id:number): Observable<any>;

}
