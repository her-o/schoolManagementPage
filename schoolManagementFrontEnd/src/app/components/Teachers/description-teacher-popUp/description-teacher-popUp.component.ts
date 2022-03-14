import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';

@Component({
  selector: 'app-description-teacher-popUp',
  templateUrl: './description-teacher-popUp.component.html',
  styleUrls: ['./description-teacher-popUp.component.css']
})
export class DescriptionTeacherPopUpComponent implements OnInit {

 @Input() teacher!:Teacher;

  constructor() { }

  ngOnInit(): void {
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.descriptionTeacher');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
