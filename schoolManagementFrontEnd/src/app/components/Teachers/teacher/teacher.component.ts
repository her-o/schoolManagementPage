import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  id!:string | null;
  teacher = new Teacher();
  subjects:Subject[] = [];

  constructor(private service:TeacherService,
              private subjectService:SubjectService, 
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id == null) {
      throw new Error;
    }
    this.getTeacherById(this.id);
    this.getTeacherSubjects(this.teacher);
  
  }

  getTeacherById(id: string) {
    this.service.getById(id).subscribe({
      next: (data) => this.teacher = data,
      error: (error) => console.log(error)
    });
  }

  getTeacherSubjects(teacher:Teacher) {
    this.subjectService.getAll().subscribe({
      next: (data) => this.subjects = data.filter((s:Subject) => s.teacher.id == this.teacher.id),                                
      error: (error) => console.log(error)
    });
  }

  toggleSubjectsList() {
    var subjects_table = document.getElementById("subjects-table");
    if(subjects_table != null) subjects_table.classList.toggle("active");  
            
  }
}
