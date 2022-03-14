import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentPopUpComponent } from './delete-student-popUp.component';

describe('DeleteStudentPopUpComponent', () => {
  let component: DeleteStudentPopUpComponent;
  let fixture: ComponentFixture<DeleteStudentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
