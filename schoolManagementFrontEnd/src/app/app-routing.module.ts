import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/Students/students-list/students-list.component';
import { SubjectsListComponent } from './components/Subjects/subjects-list/subjects-list.component';
import { TeachersListComponent } from './components/Teachers/teachers-list/teachers-list.component';


const routes: Routes = [
  {path: 'subjects', component: SubjectsListComponent},
  {path: 'teachers', component: TeachersListComponent},
  {path: 'students', component: StudentsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
