import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Subject } from 'src/app/model/subject';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject!:Subject;
  students!:Student[];
  studentsToEnrole!:Student[];
  enroling:boolean = false;
  enroleForm!:FormGroup;
  
  constructor(private service:SubjectService, 
              private studentService:StudentService,
              private route:ActivatedRoute,
              private router:Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    var id = this.route.snapshot.paramMap.get('id');
    if(id != undefined) {
      console.log(this.service.subjects)
      this.subject = this.service.subjects.filter(subject => (subject.id).toString() == id)[0];
    }
    
    this.enroleForm = this.fb.group({
      student: ['', [Validators.required, Validators.email]],
    });

  }

  getStudents() {
    this.studentService.getAll().subscribe({
      next:(data)=> this.students = data,
      error:(error)=> console.log(error)
    })
  }

  toggleStudentsList() {
    var students_table = document.getElementById("students-table");
    if(students_table != null) students_table.classList.toggle("active"); 
  }

  toggleEnroleForm() {
    this.enroling = !this.enroling;
    this.getStudentsToEnrole();
  }

  getStudentsToEnrole() {
    this.studentsToEnrole = this.students.filter(s => !this.subject.students.includes(s));
  }


  enroleStudent() {
    var email = this.enroleForm.get('student')?.value;
    this.service.enroleStudent(this.subject.id, email).subscribe({
      next:(data)=> {},
      error:(error)=>console.log(error)
    })  
  }

  removeStudent(email:string) {
    this.service.removeStudent(this.subject.id, email).subscribe({
      next:(data)=> {
        this.getStudentsToEnrole();
      },
      error: (error)=> console.log(error)
    }) 
  }
}
