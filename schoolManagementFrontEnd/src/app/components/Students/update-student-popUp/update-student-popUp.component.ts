import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student-popUp',
  templateUrl: './update-student-popUp.component.html',
  styleUrls: ['./update-student-popUp.component.css']
})
export class UpdateStudentPopUpComponent implements OnInit {
 
  @Input() student!:Student;
  @Input() studentsList!:Student[];
  
  updateForm!:FormGroup;

  constructor(private service:StudentService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.updateForm = this.fb.group({
      firstName: [`${this.student.firstName}`, [Validators.required, Validators.minLength(3)]],
      lastName: [`${this.student.lastName}`, [Validators.required, Validators.minLength(3)]],
      email: [`${this.student.email}`, [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    const updatedStudent = this.buildNewStudent();
    this.service.update(this.student.id, updatedStudent);
    this.student.firstName = updatedStudent.firstName;
    this.student.lastName = updatedStudent.lastName;
    this.student.email = updatedStudent.email;
    this.studentsList.sort((a, b)=> a.lastName.localeCompare(b.lastName));
    this.toggleFormOff();
  }

  private buildNewStudent():Student {
    const student = new Student();
    student.firstName = this.updateForm.get('firstName')?.value;
    student.lastName = this.updateForm.get('lastName')?.value;
    student.email = this.updateForm.get('email')?.value;
    return student;
  }

  toggleFormOff(){
    const updateFormContainer = document.querySelector('.updateStudent');
    const table = document.querySelector('.table');
    updateFormContainer?.classList.toggle('open');
    table?.classList.toggle('blurred');
  }

}
