import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSaveService } from '../data-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculate-sprint',
  templateUrl: './calculate-sprint.component.html',
  styleUrl: './calculate-sprint.component.scss'
})
export class CalculateSprintComponent implements OnInit {

  sprintForm: FormGroup;
  taskList:any;
  sprintArraySingle:any = []

  constructor(private fb : FormBuilder,
              private dataArrayService: DataSaveService,
              private router : Router
  ) {}

  ngOnInit(): void {
    this.sprintForm = this.fb.group({
      sprint:['',Validators.required]
    })
  }


  checkSprint() {
    console.log(this.sprintForm.value);
    let targetValue  = this.sprintForm.value.sprint;
    const storedData = this.dataArrayService.getStoredData();
    if(storedData) {
      this.taskList = JSON.parse(storedData);
      let set = new Array;
      
      for(let i = 0; i<this.taskList.length; i++) {
        let diffrence = targetValue - this.taskList[i].point;
        if(targetValue == this.taskList[i].point){
          this.sprintArraySingle.push(this.taskList[i])
        }
      }

      console.log(this.sprintArraySingle,"line 41 ", set)
    }

  }

  clearStories() {
    this.dataArrayService.clearSorage();
    this.router.navigate([''])

  }
}
