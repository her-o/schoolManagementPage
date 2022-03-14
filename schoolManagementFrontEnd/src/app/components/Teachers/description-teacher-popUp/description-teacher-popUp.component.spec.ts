import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTeacherPopUpComponent } from './description-teacher-popUp.component';

describe('DescriptionTeacherPopUpComponent', () => {
  let component: DescriptionTeacherPopUpComponent;
  let fixture: ComponentFixture<DescriptionTeacherPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionTeacherPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTeacherPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
