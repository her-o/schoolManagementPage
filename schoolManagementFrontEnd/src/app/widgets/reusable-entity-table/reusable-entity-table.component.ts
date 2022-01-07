import { keyframes } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Infodto } from 'src/app/model/infodto';
import { Schedule } from 'src/app/model/schedule';
import { Teacher } from 'src/app/model/teacher';
import { AbstractService } from 'src/app/services/abstract.service';


@Component({
  selector: 'app-reusable-entity-table',
  templateUrl: './reusable-entity-table.component.html',
  styleUrls: ['./reusable-entity-table.component.css']
})
export class ReusableEntityTableComponent implements OnInit {

  @Input() GridData: any;
  @Input() ColData: any;
  @Input() Id: any;
  @Input() Options!: Teacher[];
  @Input() ImportedService: any;
  @Input() DetailsUrl:any;

  updateForm!:FormGroup;
  record!:any;
  teachers!:Teacher[];
 
  constructor(private service:AbstractService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {

    this.service = this.ImportedService;
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      teacher: ['', Validators.required]
    })

  }

  toggleUpdate(record:any) {
    for(let r of this.GridData) {
      if(r === record) {
        r.updating = !r.updating;
      } else {
        r.updating = false;
      }
    }  

    this.record = record;
    this.teachers = this.Options.filter(teacher => teacher.name != record.teacherName)
  }

  delete(id:number) {
    this.service.delete(id);
  }
  
  onSubmit(id:number) {
    
    const info = new Infodto();
    info.id = id;
    info.name = this.updateForm.get('name')?.value;
    
    this.Options == undefined ?  
      info.email = this.updateForm.get('email')?.value :
      info.teacher = this.selectTeacher();
      this.record.teacher = this.selectTeacher();
      
      this.service.manageInfo(info);
  }

  selectTeacher(): Teacher {
    var teacher:Teacher;
    var formInput = this.findTeacherByName(this.updateForm.get('teacher')?.value);
    formInput ? teacher = formInput : 
                   teacher = this.record.teacher;
    return teacher;
  }

  findTeacherByName(name:string):Teacher {
    return this.teachers.filter(teacher=> teacher.name.match(name))[0];
  }

  trackByFn(index:number, record:any):number {
    return record.id;
  }

  navigateToDetails(id:number) {
    this.router.navigate([`${this.DetailsUrl}/${id}`]);
  }
}
