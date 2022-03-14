import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-delete-student-popUp',
  templateUrl: './delete-student-popUp.component.html',
  styleUrls: ['./delete-student-popUp.component.css']
})
export class DeleteStudentPopUpComponent implements OnInit {

  @Input() student!:Student;
  @Input() studentsList!:Student[];

  constructor(private service:StudentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.delete(this.student);
    this.togglePopUpOff();
    this.studentsList.splice(this.studentsList.indexOf(this.student));
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.deleteStudent');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
