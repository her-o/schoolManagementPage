import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl!:string;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getAllStudents():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students`);
  }

  getStudentById(id:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/${id}`);
  }

  getStudentByEmail(email:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/student?email=${email}`);
  }

  addNewStudent(student:Student):Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students`, student);
  }
}
