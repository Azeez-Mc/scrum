import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataSaveService } from '../data-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-task',
  templateUrl: './sprint-task.component.html',
  styleUrl: './sprint-task.component.scss'
})
export class SprintTaskComponent implements OnInit{
  taskList:any;
  constructor(private dataArrayService: DataSaveService,
              private route : Router
   ) {

  }
  ngOnInit(): void {
    this.getData();
  }


  getData() {
    const storedData  = this.dataArrayService.getStoredData();
    if (storedData) {
      this.taskList = JSON.parse(storedData);
      console.log(this.taskList)
    }
  }

  addStory() {
   
    this.route.navigate(['/story-form']);
  }
 }
