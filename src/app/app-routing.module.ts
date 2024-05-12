import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { SprintTaskComponent } from './sprint-task/sprint-task.component';
import { CalculateSprintComponent } from './calculate-sprint/calculate-sprint.component';
import { SprintStoryComponent } from './sprint-story/sprint-story.component';


const routes: Routes = [
  { path: 'main', component: MainComponent, },
  { path: 'story-form', component: StoryFormComponent },
  { path: '', component: SprintTaskComponent },
  { path: 'calculateSprint', component:CalculateSprintComponent},
  { path: 'sprint-story', component:SprintStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
