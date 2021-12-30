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
  id!:string | null;
  studentsToEnrole!:Student[];
  enroling:boolean = false;
  enroleForm!:FormGroup;
  

  constructor(private service:SubjectService, 
              private studentService:StudentService,
              private route:ActivatedRoute,
              private router:Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id == null) {
      throw new Error;
    }
    this.getSubjectById(this.id);

    this.enroleForm = this.fb.group({
      student: ['', [Validators.required, Validators.email]],
    });

    this.getStudentsToEnrole();

  }

  getSubjectById(id:string) {
    this.service.getSubjectById(id).subscribe({
      next: (data) => {
        this.subject = data;
        this.router.navigate([`/subjects/${this.id}`])
      },
      error: (error) => console.log(error)
    });
  }

  getStudentsToEnrole() {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        var allStudents:Student[];
        allStudents = data;
        this.studentsToEnrole = allStudents.filter(s => !this.subject.students.find(stud=> stud.id == s.id));
                                           
      },
      error: (error) => console.log(error)
    });
  }

  toggleStudentsList() {
    var students_table = document.getElementById("students-table");
    if(students_table != null) students_table.classList.toggle("active"); 
  }

  toggleEnroleForm() {
    this.enroling = !this.enroling;
  }

  enroleStudent() {
    var student = this.enroleForm.get('student')?.value;
    this.service.enroleStudent(this.id, student.email).subscribe({
      next:(data)=> {
        this.getSubjectById(this.id!);
        this.getStudentsToEnrole();
      },
      error:(error)=>console.log(error)
    })  
  }

  
}
