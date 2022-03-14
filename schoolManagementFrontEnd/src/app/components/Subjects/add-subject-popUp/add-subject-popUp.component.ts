import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-subject-popUp',
  templateUrl: './add-subject-popUp.component.html',
  styleUrls: ['./add-subject-popUp.component.css']
})
export class AddSubjectPopUpComponent implements OnInit {

  @Input() subjectsList!:Subject[];
  
  registerForm!:FormGroup;
  teachers!:Teacher[];
  constructor(private subjectService:SubjectService,
              private teacherService:TeacherService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.teacherService.getAll().subscribe({
      next:(data)=>this.teachers = data,
      error:(error)=>console.log(error)
    })

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      teacher: ['']
    })
  }

  onSubmit() {
    const subject = this.buildNewSubject();
    this.subjectService.add(subject);
    this.subjectsList.push(subject);
    this.toggleFormOff();
  }
  
  private buildNewSubject():Subject {
    const subject = new Subject();
    subject.name = this.registerForm.get('name')?.value;
    subject.teacher = this.searchTeacherByName();
    return subject;
  }

  private searchTeacherByName():Teacher {
    var teacher = this.registerForm.get('teacher')?.value;
    return this.teachers.filter(t => t.email.match(teacher))[0];
  }

  toggleFormOff(){
    const registerFormContainer = document.querySelector('.addSubject');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }
}
