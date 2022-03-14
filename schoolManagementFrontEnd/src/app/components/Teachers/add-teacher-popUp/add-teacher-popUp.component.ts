import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/model/teacher';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher-popUp',
  templateUrl: './add-teacher-popUp.component.html',
  styleUrls: ['./add-teacher-popUp.component.css']
})
export class AddTeacherPopUpComponent implements OnInit {

  @Input() teachersList!:Teacher[];
  
  registerForm!:FormGroup;

  constructor(private service:TeacherService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const teacher = this.buildNewTeacher();
    this.service.add(teacher);
    this.teachersList.push(teacher);
    this.toggleFormOff();
  }

  private buildNewTeacher():Teacher {
    const teacher = new Teacher();
    teacher.firstName = this.registerForm.get('firstName')?.value;
    teacher.lastName = this.registerForm.get('lastName')?.value;
    teacher.email = this.registerForm.get('email')?.value;
    return teacher;
  }

  toggleFormOff(){
    const registerFormContainer = document.querySelector('.addTeacher');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
