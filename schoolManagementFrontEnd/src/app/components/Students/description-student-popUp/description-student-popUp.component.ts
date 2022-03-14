import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-description-student-popUp',
  templateUrl: './description-student-popUp.component.html',
  styleUrls: ['./description-student-popUp.component.css']
})
export class DescriptionStudentPopUpComponent implements OnInit {

  @Input() student!:Student;

  constructor() { }

  ngOnInit(): void {
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.descriptionStudent');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }


}
