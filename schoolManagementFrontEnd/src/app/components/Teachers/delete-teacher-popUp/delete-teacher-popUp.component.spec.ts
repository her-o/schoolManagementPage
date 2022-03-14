import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeacherPopUpComponent } from './delete-teacher-popUp.component';

describe('DeleteTeacherPopUpComponent', () => {
  let component: DeleteTeacherPopUpComponent;
  let fixture: ComponentFixture<DeleteTeacherPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTeacherPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTeacherPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
