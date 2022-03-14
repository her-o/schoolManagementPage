import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubjectsListComponent} from './components/Subjects/subjects-list/subjects-list.component'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsListComponent } from './components/Students/students-list/students-list.component';
import { TeachersListComponent } from './components/Teachers/teachers-list/teachers-list.component';
import { AddSubjectPopUpComponent } from './components/Subjects/add-subject-popUp/add-subject-popUp.component';
import { DeleteSubjectPopUpComponent } from './components/Subjects/delete-subject-popUp/delete-subject-popUp.component';
import { UpdateSubjectPopUpComponent } from './components/Subjects/update-subject-popUp/update-subject-popUp.component';
import { AddStudentPopUpComponent } from './components/Students/add-student-popUp/add-student-popUp.component';
import { DeleteStudentPopUpComponent } from './components/Students/delete-student-popUp/delete-student-popUp.component';
import { UpdateStudentPopUpComponent } from './components/Students/update-student-popUp/update-student-popUp.component';
import { AddTeacherPopUpComponent } from './components/Teachers/add-teacher-popUp/add-teacher-popUp.component';
import { DeleteTeacherPopUpComponent } from './components/Teachers/delete-teacher-popUp/delete-teacher-popUp.component';
import { UpdateTeacherPopUpComponent } from './components/Teachers/update-teacher-popUp/update-teacher-popUp.component';
import { DescriptionSubjectPopUpComponent } from './components/Subjects/description-subject-popUp/description-subject-popUp.component';
import { DescriptionStudentPopUpComponent } from './components/Students/description-student-popUp/description-student-popUp.component';
import { DescriptionTeacherPopUpComponent } from './components/Teachers/description-teacher-popUp/description-teacher-popUp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsListComponent,
    TeachersListComponent,
    StudentsListComponent,
    AddSubjectPopUpComponent,
    DeleteSubjectPopUpComponent,
    UpdateSubjectPopUpComponent,
    AddStudentPopUpComponent,
    DeleteStudentPopUpComponent,
    UpdateStudentPopUpComponent,
    AddTeacherPopUpComponent,
    DeleteTeacherPopUpComponent,
    UpdateTeacherPopUpComponent,
    DescriptionSubjectPopUpComponent,
    DescriptionStudentPopUpComponent,
    DescriptionTeacherPopUpComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
