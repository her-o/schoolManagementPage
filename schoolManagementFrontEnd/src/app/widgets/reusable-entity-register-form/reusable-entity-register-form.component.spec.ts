import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableEntityRegisterFormComponent } from './reusable-entity-register-form.component';

describe('ReusableEntityRegisterFormComponent', () => {
  let component: ReusableEntityRegisterFormComponent;
  let fixture: ComponentFixture<ReusableEntityRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableEntityRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableEntityRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
