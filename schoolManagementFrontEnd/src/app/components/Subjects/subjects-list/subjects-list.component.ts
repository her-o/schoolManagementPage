import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Subject } from 'src/app/model/subject';
import { StudentService } from 'src/app/services/student.service';
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
  students!: Student[];
  subject = new Subject();

  constructor(private service:SubjectService, 
              private studentService:StudentService,
              private router:Router) { }

  ngOnInit(): void {

    this.getAllSubjects();

  }

  getAllSubjects() {
      this.service.getAll().subscribe({
        next:(data)=> this.subjects = data,
        error:(error)=> console.log(error)
      })
  }

  togglePopUp(popUpType:string) {

    const table = document.querySelector('.table');
    table?.classList.toggle('blurred');

    const popUps:any = {
      'add': document.querySelector('.addSubject'),
      'description': document.querySelector('.descriptionSubject'),
      'delete': document.querySelector('.deleteSubject'),
      'update': document.querySelector('.updateSubject')
   
    }
    var form = popUps[popUpType];
    form.classList.toggle('open');
  }

  toggleDescriptionPopUp(subject:Subject) {
    this.subject = subject;
    this.service.findStudentsToEnrole(subject.id).subscribe({
      next:(data)=> this.students = data,
      error:(error)=> console.log(error)
    });
   
    console.log(this.students);
    this.togglePopUp('description');
  }

  toggleUpdatePopUp(subject:Subject) {
    this.subject = subject;
    this.togglePopUp('update');
  }
  
  toggleDeletePopUp(subject:Subject) {
    this.subject = subject;
    this.togglePopUp('delete');
  }

  



}
