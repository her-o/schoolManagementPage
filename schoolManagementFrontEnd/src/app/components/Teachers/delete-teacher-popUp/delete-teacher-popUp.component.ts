import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-delete-teacher-popUp',
  templateUrl: './delete-teacher-popUp.component.html',
  styleUrls: ['./delete-teacher-popUp.component.css']
})
export class DeleteTeacherPopUpComponent implements OnInit {

  @Input() teacher!:Teacher;
  @Input() teachersList!:Teacher[];

  constructor(private service:TeacherService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.delete(this.teacher);
    this.teachersList.splice(this.teachersList.indexOf(this.teacher));
    this.togglePopUpOff();
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.deleteTeacher');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }
}
