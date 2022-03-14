import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../model/student';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements AbstractService {

  apiUrl!:string;
  students!:Student[];

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  add(student:Student) {
    this.addStudent(student).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  update(id:number, student:Student) {
    this.updateById(id, student).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  delete(student:Student) {
    this.deleteById(student.id).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error)
    })
  }
  
  getAll():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students`);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/${id}`);
  }

  getStudentByEmail(email:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/student?email=${email}`);
  }

  addStudent(student:Student):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students`, student);
  }

  updateById(id: number, student: Student): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/students/${id}`, student);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/students/${id}`);
  }
}
