import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  detailsUrl:string = "/teachers"
  teachers!:Teacher[];
  teacher = [
    {field: 'name', header: 'Name'},
    {field: 'email', header: 'Email'}
  ]
  hireNewTeacherForm!:FormGroup;
  addingTeacher:boolean = false;

  constructor(private service: TeacherService,
              private router:Router) { }

  ngOnInit(): void {

    if(this.service.teachers == undefined) {
      this.service.getAll().subscribe({
        next:(data)=>{
          this.service.teachers = data;
          this.teachers = this.service.teachers;
        },
        error:(error)=> console.log(error)
      })
    }
  }

  getAllTeachers() {
  
      if(this.service.teachers == undefined) {
        this.service.getAll().subscribe({
          next:(data)=>{
            this.service.teachers = data;
            this.teachers = this.service.teachers;
          },
          error:(error)=> console.log(error)
        })
      }
      this.router.navigate(['/teachers']);
  }
  getService() {
    return this.service;
  }

  toggleHireNewTeacherForm() {
    var form_container = document.getElementById("entity-register-form");
    form_container?.classList.toggle("active");
    this.addingTeacher = !this.addingTeacher;
  }

}
