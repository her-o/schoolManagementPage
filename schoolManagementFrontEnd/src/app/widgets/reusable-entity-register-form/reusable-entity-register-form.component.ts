import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Infodto } from 'src/app/model/infodto';
import { Schedule } from 'src/app/model/schedule';
import { Teacher } from 'src/app/model/teacher';
import { AbstractService } from 'src/app/services/abstract.service';

@Component({
  selector: 'app-reusable-entity-register-form',
  templateUrl: './reusable-entity-register-form.component.html',
  styleUrls: ['./reusable-entity-register-form.component.css']
})
export class ReusableEntityRegisterFormComponent implements OnInit {

  @Input() ColData: any;
  @Input() Options!: Teacher[];
  @Input() ImportedService: any;

  registerForm!:FormGroup;


  constructor(private service:AbstractService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

    this.service = this.ImportedService;
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      teacher: ['', Validators.required]
    })

  }

  onSubmit() {

    var info = new Infodto();
    info.name = this.registerForm.get('name')?.value;

    this.Options == undefined ?  
    info.email = this.registerForm.get('email')?.value :
    info.teacher = this.findTeacherByName(this.registerForm.get('teacher')?.value);

    this.service.manageInfo(info);
  }

  findTeacherByName(name:string):Teacher {
    return this.Options.filter(teacher=> teacher.name.match(name))[0];
  }
  
  trackByFn(index:number, record:any):number {
    return record.id;
  }

}
