import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../model/subject';
import { AbstractService } from './abstract.service';
import { Teacher } from '../model/teacher';
import { TeacherService } from './teacher.service';
import { Infodto } from '../model/infodto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements AbstractService {
  
  apiUrl:string;
  listUrl:string = '/subjects';
  subjects!:Subject[];

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl;
   
  }

  loadEntities() {
    this.getAll().subscribe({
      next:(data)=> this.subjects = data,
      error:(error)=> console.log(error)
    })
  }

  manageInfo(info: Infodto): void {
    const subject = new Subject();
    subject.name = info.name;
    subject.teacher = info.teacher;
    info.id ? this.update(info.id, subject) : this.add(subject);
  }

  add(subject:Subject) {
    this.addSubject(subject).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  update(id:number, subject:Subject) {
    for(let s of this.subjects) {
      if(s.id == id) {
        s.teacherName = subject.teacher.name;
        s.updating = false;
      }
    }
    this.updateById(id, subject).subscribe({
      next:(data)=> {},
      error:(error)=> console.log(error)
    });
  }

  delete(id:number) {
    this.deleteById(id).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error)
    })
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

  enroleStudent(subjectId:number, studentEmail:string):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${subjectId}/students/enrole?email=${studentEmail}`, null);
  }

  removeStudent(subjectId:number, studentEmail:string):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${subjectId}/students/remove?email=${studentEmail}`, null);
  }
}
