import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherPopUpComponent } from './update-teacher-popUp.component';

describe('UpdateTeacherPopUpComponent', () => {
  let component: UpdateTeacherPopUpComponent;
  let fixture: ComponentFixture<UpdateTeacherPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeacherPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeacherPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
