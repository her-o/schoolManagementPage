import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/Students/student/student.component';
import { StudentsListComponent } from './components/Students/students-list/students-list.component';
import { SubjectComponent } from './components/Subjects/subject/subject.component';
import { SubjectsListComponent } from './components/Subjects/subjects-list/subjects-list.component';
import { TeacherComponent } from './components/Teachers/teacher/teacher.component';
import { TeachersListComponent } from './components/Teachers/teachers-list/teachers-list.component';


const routes: Routes = [
  {path: 'subjects', component: SubjectsListComponent},
  {path: 'subjects/:id', component: SubjectComponent},
  {path: 'teachers', component: TeachersListComponent},
  {path: 'teachers/:id', component: TeacherComponent},
  {path: 'students', component: StudentsListComponent},
  {path: 'students/:id', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
