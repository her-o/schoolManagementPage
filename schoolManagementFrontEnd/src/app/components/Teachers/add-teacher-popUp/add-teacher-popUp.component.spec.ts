import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherPopUpComponent } from './add-teacher-popUp.component';

describe('AddTeacherPopUpComponent', () => {
  let component: AddTeacherPopUpComponent;
  let fixture: ComponentFixture<AddTeacherPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeacherPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
