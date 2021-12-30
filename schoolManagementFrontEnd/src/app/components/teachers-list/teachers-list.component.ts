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

  teachers!:Teacher[];
  hireNewTeacherForm!:FormGroup;

  constructor(private service: TeacherService, 
              private fb: FormBuilder,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllTeachers();

    this.hireNewTeacherForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    })

  }

  getAllTeachers() {
    this.service.getAllTeachers().subscribe({
      next: (data) => this.teachers = data,
      error: (error) => console.log(error)
    });
    this.router.navigate(['/teachers']);
  }

  navigateToDetails(id:number) {
    this.router.navigate([`/teachers/${id}`])
  }

  toggleHireNewTeacherForm() {
    var form_container = document.getElementById("form-container");
    form_container?.classList.toggle("active");
  }

  onSubmit() {
    var teacher = new Teacher();
    teacher.name = `${this.hireNewTeacherForm.get('first_name')?.value} ${this.hireNewTeacherForm.get('last_name')?.value}`;
    teacher.email = `${this.hireNewTeacherForm.get('email')?.value}`;
    this.service.addTeacher(teacher).subscribe({
      next:(data)=> this.getAllTeachers(),
      error:(error)=>console.log(error)
    })
  }
}
