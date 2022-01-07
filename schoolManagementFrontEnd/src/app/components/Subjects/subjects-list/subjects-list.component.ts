import { Component, OnInit } from '@angular/core';
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
  
  detailsUrl:string = "/subjects"
  subjects: Subject[] = [];
  subject = [
    {field: 'name', header: 'Name'},
    {field: 'teacherName', header: 'Teacher'},
  ]
  teachers!:Teacher[];

  constructor(private service:SubjectService, 
              private teacherService:TeacherService,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllSubjects();
    this.getAllTeachers();

  }

  getAllSubjects() {

    if(this.service.subjects == undefined) {
      this.service.getAll().subscribe({
        next:(data)=>{
          this.service.subjects = data;
          this.subjects = this.service.subjects;
          for(let subject of this.subjects) {
            if(subject.teacher != null) {
              subject.teacherName = subject.teacher.name;
           }
          }
        },
        error:(error)=> console.log(error)
      })
    }
    this.router.navigate(['/subjects']);
  }

  getAllTeachers() {

    if(this.teacherService.teachers == undefined) {
      this.teacherService.getAll().subscribe({
        next:(data)=>{
          this.teacherService.teachers = data;
          this.teachers = this.teacherService.teachers;
        },
        error:(error)=> console.log(error)
      })
    }
  }

  navigateToDetails(id:number) {
    this.router.navigate([`/subjects/${id}`]);
  }
  

  toggleAddSubjectForm() {  
    const form = document.getElementById("entity-register-form");
    form?.classList.toggle("active");
  }

  findTeacherByName(name:string):Teacher {
    return this.teacherService.teachers.filter(teacher => teacher.name == name)[0];
  }

  getService() {
    return this.service;
  }

}
