import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update-teacher-popUp',
  templateUrl: './update-teacher-popUp.component.html',
  styleUrls: ['./update-teacher-popUp.component.css']
})
export class UpdateTeacherPopUpComponent implements OnInit {

  @Input() teacher!:Teacher;
  @Input() teachersList!:Teacher[];
  
  updateForm!:FormGroup;

  constructor(private service:TeacherService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      firstName: [`${this.teacher.firstName}`, [Validators.required, Validators.minLength(3)]],
      lastName: [`${this.teacher.lastName}`, [Validators.required, Validators.minLength(3)]],
      email: [`${this.teacher.email}`, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const updatedTeacher = this.buildNewTeacher();
    this.service.update(this.teacher.id, updatedTeacher);
    this.teacher.firstName = updatedTeacher.firstName;
    this.teacher.lastName = updatedTeacher.lastName;
    this.teacher.email = updatedTeacher.email;
    this.toggleFormOff();
  }

  private buildNewTeacher():Teacher {
    var teacher = new Teacher();
    teacher.firstName = this.updateForm.get('firstName')?.value;
    teacher.lastName = this.updateForm.get('lastName')?.value;
    teacher.email = this.updateForm.get('email')?.value;
    return teacher;
  }

  toggleFormOff(){
    const updateFormContainer = document.querySelector('.updateTeacher');
    const table = document.querySelector('.table');
    updateFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
