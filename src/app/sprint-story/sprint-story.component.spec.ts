import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintStoryComponent } from './sprint-story.component';

describe('SprintStoryComponent', () => {
  let component: SprintStoryComponent;
  let fixture: ComponentFixture<SprintStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
