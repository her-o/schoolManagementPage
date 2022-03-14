import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentPopUpComponent } from './add-student-popUp.component';

describe('AddStudentPopUpComponent', () => {
  let component: AddStudentPopUpComponent;
  let fixture: ComponentFixture<AddStudentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
