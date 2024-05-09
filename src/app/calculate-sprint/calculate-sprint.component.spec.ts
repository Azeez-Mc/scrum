import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSprintComponent } from './calculate-sprint.component';

describe('CalculateSprintComponent', () => {
  let component: CalculateSprintComponent;
  let fixture: ComponentFixture<CalculateSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateSprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
