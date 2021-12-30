import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {

  subjects!:Subject[];
  teachers!:Teacher[];
  updateSubjectForm!:FormGroup;
  addSubjectForm!:FormGroup;
  days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  constructor(private service:SubjectService, 
              private teacherService:TeacherService,
              private fb: FormBuilder,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllTeachers();
    this.getAllSubjects();

    this.addSubjectForm = this.fb.group({
      name: ['', Validators.required],
      day: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    })

    this.updateSubjectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      teacher: ['', [Validators.required]],
      schedule: ['']
    })
  }

  getAllSubjects() {
    this.service.getAllSubjects().subscribe({
      next: (data) => this.subjects = data,
      error: (error) => console.log(error)
    });
    this.router.navigate(['/subjects'])
  }

  getAllTeachers() {
    this.teacherService.getAllTeachers().subscribe({
      next:(data)=> this.teachers = data,
      error:(error)=> console.log(error)
    })
  }

  navigateToDetails(id:number) {
    this.router.navigate([`/subjects/${id}`]);
  }

  toggleUpdateFormOn(id:number) {

    for(let subject of this.subjects) {
   
      if(subject.id == id) {
        subject.updating = true;
      } else {
        subject.updating = false;
      }
    }
   
  }

  toggleUpdateFormOff(id:number) {
    for(let subject of this.subjects) {
      if(subject.id == id) {
        subject.updating = false;
      }
    }
  }

  updateSubject(id:number) {
    var updatedSubject = new Subject();
    updatedSubject.name = this.updateSubjectForm.get('name')?.value;
    updatedSubject.teacher = this.updateSubjectForm.get('teacher')?.value;
    updatedSubject.schedule = this.updateSubjectForm.get('schedule')?.value;

    this.service.updateSubject(id, updatedSubject).subscribe({
      next:(data)=>this.getAllSubjects(),
      error:(error)=>console.log(error)
    })
  }

  toggleAddSubjectForm() {  
    const form = document.getElementById("form-container");
    form?.classList.toggle("active");
  }

  onSubmit() {
    var subject = new Subject();
    subject.name = this.addSubjectForm.get('name')?.value;
    var schedule = `${this.addSubjectForm.get('day')?.value}: ${this.addSubjectForm.get('startTime')?.value}-${this.addSubjectForm.get('endTime')?.value}`;
    subject.schedule = schedule;
    this.service.addSubject(subject).subscribe({
      next:(data)=>{
        this.getAllSubjects();
      },
      error:(error)=>console.log(error)
    });
   
  }




}
