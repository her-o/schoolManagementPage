import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableEntityTableComponent } from './reusable-entity-table.component';

describe('ReusableEntityTableComponent', () => {
  let component: ReusableEntityTableComponent;
  let fixture: ComponentFixture<ReusableEntityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableEntityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableEntityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
