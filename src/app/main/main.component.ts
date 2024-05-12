import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  sprint:any;
  sprintItem:any;
  constructor(private route: Router) {
    this.sprint = localStorage.getItem('sprint');
  }

  ngOnInit(): void {
    if(this.sprint) {
      this.sprintItem = JSON.parse(this.sprint);
      console.log(this.sprintItem);
    }
  }
  showStory(data:any) {
    this.route.navigate(['/sprint-story'], { state: { example: data } })
  }
}
