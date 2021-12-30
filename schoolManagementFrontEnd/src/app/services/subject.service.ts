import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  apiUrl:string;
  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getAllSubjects():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects`);
  }

  getSubjectById(id:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subjects/${id}`);
  }

  addSubject(subject:Subject):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/subjects`, subject);
  }

  updateSubject(id: number, subject: Subject):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${id}`, subject);
  }

  enroleStudent(subjectId:string |null, studentEmail:string):Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subjects/${subjectId}/students/enrole?email=${studentEmail}`, null);
  }
}
