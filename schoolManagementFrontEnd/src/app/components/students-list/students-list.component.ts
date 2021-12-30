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

  students!:Student[];
  registerNewStudentForm!:FormGroup;

  constructor(private service: StudentService, 
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllStudents();

    this.registerNewStudentForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  getAllStudents() {
    this.service.getAllStudents().subscribe({
      next: (data) => this.students = data,
      error: (error) => console.log(error)
    });
    this.router.navigate(['/students']);
  }

  navigateToDetails(id:number) {
    this.router.navigate([`/students/${id}`])
  }

  toggleRegisterNewStudentForm() {
    var form_container = document.getElementById("form-container")
    form_container?.classList.toggle("active");
  }

  onSubmit() {
    var student = new Student();
    student.name
     = `${this.registerNewStudentForm.get('first_name')?.value} ${this.registerNewStudentForm.get('last_name')?.value}`;
    student.email = `${this.registerNewStudentForm.get('email')?.value}`;
    this.service.addNewStudent(student).subscribe({
      next:(data)=> this.getAllStudents(),
      error:(error)=>console.log(error)
    });
  }
  

}
