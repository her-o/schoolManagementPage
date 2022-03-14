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

  teacher:Teacher = new Teacher();
  teachers!:Teacher[];
  
  constructor(private service: TeacherService) { }

  ngOnInit(): void {

    this.getAllTeachers();
    
  }

  getAllTeachers() {
    this.service.getAll().subscribe({
      next:(data)=> this.teachers = data,
      error:(error)=> console.log(error)
    })
  }
  
  togglePopUp(popUpType:string) {

    const table = document.querySelector('.table');
    table?.classList.toggle('blurred');

    const popUps:any = {
      'add': document.querySelector('.addTeacher'),
      'description': document.querySelector('.descriptionTeacher'),
      'update': document.querySelector('.updateTeacher'),
      'delete': document.querySelector('.deleteTeacher')
    }
    var form = popUps[popUpType];
    form.classList.toggle('open');
  }

  toggleDeletePopUp(teacher:Teacher) {
    this.teacher = teacher;
    this.togglePopUp('delete');
  }

  toggleUpdatePopUp(teacher:Teacher) {
    this.teacher = teacher;
    this.togglePopUp('update');
  }

  toggleDescriptionPopUp(teacher:Teacher) {
    this.teacher = teacher;
    this.togglePopUp('description')
  }

}
