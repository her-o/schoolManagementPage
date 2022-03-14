import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubjectPopUpComponent } from './delete-subject-popUp.component';

describe('DeleteSubjectPopUpComponent', () => {
  let component: DeleteSubjectPopUpComponent;
  let fixture: ComponentFixture<DeleteSubjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSubjectPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
