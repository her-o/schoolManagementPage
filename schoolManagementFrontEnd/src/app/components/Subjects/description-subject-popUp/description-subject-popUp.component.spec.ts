import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSubjectPopUpComponent } from './description-subject-popUp.component';

describe('DescriptionSubjectPopUpComponent', () => {
  let component: DescriptionSubjectPopUpComponent;
  let fixture: ComponentFixture<DescriptionSubjectPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSubjectPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSubjectPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
