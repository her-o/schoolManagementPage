import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];
  student = new Student();

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
      this.service.getAll().subscribe({
        next:(data)=> {
          this.students = data
          this.students.sort((a, b)=> a.lastName.localeCompare(b.lastName));
        },
        error:(error)=> console.log(error)
      })

  }
  
  togglePopUp(popUpType:string) {

    const table = document.querySelector('.table');
    table?.classList.toggle('blurred');

    const popUps:any = {
      'add': document.querySelector('.addStudent'),
      'description': document.querySelector('.descriptionStudent'),
      'update': document.querySelector('.updateStudent'),
      'delete': document.querySelector('.deleteStudent')
    }
    var form = popUps[popUpType];
    form.classList.toggle('open');
  }

  toggleDescriptionPopUp(student:Student) {
    this.student = student;
    this.togglePopUp('description');
  }

  toggleUpdatePopUp(student:Student) {
    this.student = student;
    this.togglePopUp('update');
  }

  toggleDeletePopUp(student:Student) {
    this.student = student;
    this.togglePopUp('delete');
  }
}
