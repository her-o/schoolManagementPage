import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update-subject-popUp',
  templateUrl: './update-subject-popUp.component.html',
  styleUrls: ['./update-subject-popUp.component.css']
})
export class UpdateSubjectPopUpComponent implements OnInit {

  @Input() subject!:Subject;
  @Input() subjectsList!:Subject[];

  updateForm!:FormGroup;
  teachers!:Teacher[];
  currentTeacher!:Teacher | null;
  
  constructor(private subjectService:SubjectService,
              private teacherService:TeacherService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.currentTeacher = this.subject.teacher;
    this.teacherService.getAll().subscribe({
      next:(data)=> this.teachers = data,
      error:(error)=>console.log(error)
    });

    this.updateForm = this.fb.group({
      name: [`${this.subject.name}`, [Validators.required, Validators.minLength(3)]],
      teacher: [``]
    })
  }

  onSubmit() {
    var updatedSubject:Subject = this.buildNewSubject();
    this.subjectService.update(this.subject.id, updatedSubject);
    this.updateSubjectInArray(updatedSubject);
    this.toggleFormOff();
  }

  private updateSubjectInArray(updatedSubject: Subject) {
    this.subject.name = updatedSubject.name;
    this.subject.teacher = updatedSubject.teacher;
  }

  private buildNewSubject():Subject {
    const updatedSubject = new Subject();
    updatedSubject.name = this.getName();
    updatedSubject.teacher = this.searchTeacherByName();
    return updatedSubject;
  }

  private getName(): string {
    var name!:string;
    var formName = this.updateForm.get('name')?.value;
    formName ? name = formName:
                     name = this.subject.name;

    return name;      
  }

  private searchTeacherByName():Teacher {
    const teacherEmail = this.updateForm.get('teacher')?.value;
    return this.teachers.filter(teacher => teacher.email.match(teacherEmail))[0];
  }

  toggleFormOff(){
    const registerFormContainer = document.querySelector('.updateSubject');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }
}
