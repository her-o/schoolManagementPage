import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  detailsUrl:string = "/students"
  students!:Student[];
  student = [
    {field: 'name', header: 'Name'},
    {field: 'email', header: 'Email'}
  ]
  registerNewStudentForm!:FormGroup;

  constructor(private service: StudentService, 
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllStudents();

  }

  getAllStudents() {
    this.service.getAll().subscribe({
      next: (data) => this.students = data,
      error: (error) => console.log(error)
    });
    this.router.navigate(['/students']);
  }

  navigateToDetails(id:number) {
    this.router.navigate([`/students/${id}`])
  }

  toggleRegisterNewStudentForm() {
    var form_container = document.getElementById("entity-register-form")
    form_container?.classList.toggle("active");
  }
  
  getService() {
    return this.service;
  }
  
}
