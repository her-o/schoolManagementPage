import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubjectsListComponent} from './components/subjects-list/subjects-list.component'
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './components/subject/subject.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentComponent } from './components/student/student.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsListComponent,
    SubjectComponent,
    StudentsListComponent,
    StudentComponent,
    TeachersListComponent,
    TeacherComponent
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
