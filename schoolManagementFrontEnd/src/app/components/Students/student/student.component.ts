import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/model/subject';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  id!:string | null;
  student = new Student();
  subjects:Subject[] = [];

  constructor(private service:StudentService,
              private subjectService:SubjectService, 
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id == null) {
      throw new Error;
    }
    this.getStudentById(this.id);
    this.getStudentSubjects(this.student);
  
  }

  getStudentById(id: string) {
    this.service.getById(id).subscribe({
      next: (data) => this.student = data,
      error: (error) => console.log(error)
    });
  }

  getStudentSubjects(student:Student) {
    this.subjectService.getAll().subscribe({
      next: (data) => this.subjects = data.filter((s:Subject) => s.students
                                          .find(student => student.id == this.student.id)),
      error: (error) => console.log(error)
    });
  }

  toggleSubjectsList() {
    var subjects_table = document.getElementById("subjects-table");
    if(subjects_table != null) subjects_table.classList.toggle("active");  
            
  }
}
