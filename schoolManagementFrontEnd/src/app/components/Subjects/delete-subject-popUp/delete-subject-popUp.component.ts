import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-delete-subject-popUp',
  templateUrl: './delete-subject-popUp.component.html',
  styleUrls: ['./delete-subject-popUp.component.css']
})
export class DeleteSubjectPopUpComponent implements OnInit {

  @Input() subject!:Subject;
  @Input() subjectsList!:Subject[];

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.delete(this.subject);
    this.subjectsList.splice(this.subjectsList.indexOf(this.subject));
    this.togglePopUpOff();
  }

  togglePopUpOff() {
    const registerFormContainer = document.querySelector('.deleteSubject');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}


