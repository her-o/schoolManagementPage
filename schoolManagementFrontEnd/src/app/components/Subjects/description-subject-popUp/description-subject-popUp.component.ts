import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-description-subject-popUp',
  templateUrl: './description-subject-popUp.component.html',
  styleUrls: ['./description-subject-popUp.component.css']
})
export class DescriptionSubjectPopUpComponent implements OnInit {

  @Input() subject!:Subject;
  @Input() students!:Student[];

  enroleStudentForm!:FormGroup;

  constructor(private subjectService:SubjectService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.enroleStudentForm = this.fb.group({
      student:['',[Validators.required]]
    })
  }

  enroleNewStudent() {
    var student = this.getStudent();
    this.subjectService.enrole(this.subject, student);
    this.students.splice(this.students.indexOf(student), 1);
    this.toggleEnrolingForm();
  }

  removeStudent(student:Student) {
    this.subjectService.removeStudent(this.subject, student);
    this.students.push(student);
  }

  private getStudent(): Student {
    var studentEmail = this.enroleStudentForm.get('student')?.value;
    var student:Student = this.students.filter(s => s.email.match(studentEmail))[0];
    return student;
  }

  toggleEnrolingForm() {
    const enrolingForm = document.querySelector('.enrolingForm');
    const table = document.querySelector('.studentsTable');
    enrolingForm?.classList.toggle('open');
    table?.classList.toggle('hidden');
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.descriptionSubject');
    const table = document.querySelector('.table');
    const enrolingForm = document.querySelector('.enrolingForm');
    const studentsTable = document.querySelector('.studentsTable');
    enrolingForm?.classList.remove('open');
    studentsTable?.classList.remove('hidden');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
