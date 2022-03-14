import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionStudentPopUpComponent } from './description-student-popUp.component';

describe('DescriptionStudentPopUpComponent', () => {
  let component: DescriptionStudentPopUpComponent;
  let fixture: ComponentFixture<DescriptionStudentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionStudentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionStudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
