import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubjectPopUpComponent } from './update-subject-popUp.component';

describe('UpdateSubjectPopUpComponent', () => {
  let component: UpdateSubjectPopUpComponent;
  let fixture: ComponentFixture<UpdateSubjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubjectPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
