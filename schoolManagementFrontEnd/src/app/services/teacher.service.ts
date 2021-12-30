import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl:String;

  constructor(private http:HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getAllTeachers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers`)
  }

  getTeacherById(id:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers/${id}`)
  }

  addTeacher(teacher:Teacher):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/teachers`, teacher);
  }

}
