import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../model/teacher';
import { AbstractService } from './abstract.service';
import { SubjectService } from './subject.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService implements AbstractService {

  apiUrl:String;
  teachers!:Teacher[];


  constructor(private http:HttpClient,
              private subjectService:SubjectService) { 
    this.apiUrl = environment.apiUrl;
  }


  add(teacher:Teacher) {
    this.addTeacher(teacher).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  update(id:number, teacher:Teacher) {

    this.updateById(id, teacher).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  delete(teacher:Teacher) {
    this.deleteById(teacher.id).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error)
    })
  }

  getAll():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers`)
  }

  getById(id:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers/${id}`)
  }

  addTeacher(teacher:Teacher):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teachers`, teacher);
  }

  updateById(id: number, teacher: Teacher): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/teachers/${id}`, teacher)
  }
  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/teachers/${id}`);
  }

}
