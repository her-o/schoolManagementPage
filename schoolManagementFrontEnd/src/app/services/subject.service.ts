import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../model/subject';
import { AbstractService } from './abstract.service';
import { Teacher } from '../model/teacher';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements AbstractService {

  apiUrl:string;
  subjects!:Subject[];

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  add(subject:Subject) {
    this.addSubject(subject).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  update(id:number, subject:Subject) {
    this.updateById(id, subject).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  delete(subject:Subject) {
    this.deleteById(subject.id).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error)
    })
  }

  enrole(subject:Subject, student:Student) {
    subject.students.push(student);
    this.enroleStudent(subject.id, student.email).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error)
    })
  }

  removeStudent(subject:Subject, student:Student) {
    subject.students.splice(subject.students.indexOf(student), 1);
    this.update(subject.id, subject);  
  }

  getAll():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects`);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects/${id}`);
  }
  
  addSubject(subject:Subject):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subjects`, subject);
  }

  updateById(id: number, subject: Subject):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${id}`, subject);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/subjects/${id}`);
  }

  findStudentsToEnrole(id:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects/${id}/studentsToEnrole`)
  }

  enroleStudent(id:number, studentEmail:string):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${id}/enrole`, studentEmail);
  }
  
}
