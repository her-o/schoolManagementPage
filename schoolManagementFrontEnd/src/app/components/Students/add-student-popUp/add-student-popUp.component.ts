import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student-popUp',
  templateUrl: './add-student-popUp.component.html',
  styleUrls: ['./add-student-popUp.component.css']
})
export class AddStudentPopUpComponent implements OnInit {
  
  @Input() studentsList!:Student[];
  
  registerForm!:FormGroup;

  constructor(private service:StudentService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const student = this.buildNewStudent();
    this.service.add(student);
    this.studentsList.push(student);
    this.studentsList.sort((a, b)=> a.lastName.localeCompare(b.lastName));
    this.toggleFormOff();
  }

  private buildNewStudent():Student {
    const student = new Student();
    student.firstName = this.registerForm.get('firstName')?.value;
    student.lastName = this.registerForm.get('lastName')?.value;
    student.email = this.registerForm.get('email')?.value;
    return student;
  }

  toggleFormOff(){
    const registerFormContainer = document.querySelector('.addStudent');
    const table = document.querySelector('.table');
    registerFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
