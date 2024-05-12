import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-story',
  templateUrl: './sprint-story.component.html',
  styleUrl: './sprint-story.component.scss'
})
export class SprintStoryComponent implements OnInit {

  data:any;
  story:any
  constructor(private route : Router) {
   this.data =  this.route.getCurrentNavigation()?.extras.state;
   
   console.log(this.data)
  }

  ngOnInit(): void {
    if(this.data) {
      this.story = this.data.example
    }
  }
}
