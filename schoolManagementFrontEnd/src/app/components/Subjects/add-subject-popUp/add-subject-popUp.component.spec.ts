import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectPopUpComponent } from './add-subject-popUp.component';

describe('AddSubjectPopUpComponent', () => {
  let component: AddSubjectPopUpComponent;
  let fixture: ComponentFixture<AddSubjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubjectPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
