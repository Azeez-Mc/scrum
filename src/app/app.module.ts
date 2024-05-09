import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { SprintTaskComponent } from './sprint-task/sprint-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalculateSprintComponent } from './calculate-sprint/calculate-sprint.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StoryFormComponent,
    SprintTaskComponent,
    CalculateSprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
