import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubjectsListComponent} from './components/Subjects/subjects-list/subjects-list.component'
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './components/Subjects/subject/subject.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsListComponent } from './components/Students/students-list/students-list.component';
import { StudentComponent } from './components/Students/student/student.component';
import { TeachersListComponent } from './components/Teachers/teachers-list/teachers-list.component';
import { TeacherComponent } from './components/Teachers/teacher/teacher.component';
import { ReusableEntityTableComponent } from './widgets/reusable-entity-table/reusable-entity-table.component';
import { ReusableEntityRegisterFormComponent } from './widgets/reusable-entity-register-form/reusable-entity-register-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsListComponent,
    SubjectComponent,
    TeachersListComponent,
    TeacherComponent,
    StudentsListComponent,
    StudentComponent,
    ReusableEntityTableComponent,
    ReusableEntityRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
