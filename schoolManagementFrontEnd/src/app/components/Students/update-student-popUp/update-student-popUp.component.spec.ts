import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentPopUpComponent } from './update-student-popUp.component';

describe('UpdateStudentPopUpComponent', () => {
  let component: UpdateStudentPopUpComponent;
  let fixture: ComponentFixture<UpdateStudentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
