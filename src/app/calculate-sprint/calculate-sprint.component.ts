import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSaveService } from '../data-save.service';
import { Router } from '@angular/router';

interface DataItem {
  story: string;
  point: number;
  date: string;
  status: boolean;
}

@Component({
  selector: 'app-calculate-sprint',
  templateUrl: './calculate-sprint.component.html',
  styleUrl: './calculate-sprint.component.scss'
})
export class CalculateSprintComponent implements OnInit {

  sprintForm: FormGroup;
  taskList:DataItem[];
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


  checkSprint(key:string) {
    console.log(key,"line 38")
    let targetValue  = this.sprintForm.value.sprint;
    const storedData = this.dataArrayService.getStoredData();
    if(storedData) {
      this.taskList = JSON.parse(storedData);

      this.taskList.sort((b, a) => {
        if (a.point !== b.point) {
          return a.point - b.point; 
        } else {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });

      const filteredArray: DataItem[] = this.taskList.filter(item => item.point === targetValue && !item.status);

      let result: DataItem;
      if(filteredArray.length > 0) {
       
        result = filteredArray[0];
        if(key =='create') {
          this.dataArrayService.updateScrum([result]);
          this.router.navigate(['/sprint-story'],{ state: { example: [result] } } ) ;     
        }else {
          this.dataArrayService.removeStory([result]);
          this.router.navigate(['']); 
        }
     
      } else {
        const selectSprint:DataItem[] | null= this.findCombinations(targetValue,  this.taskList);
        if(selectSprint != null){

          if(key =='create') {
            this.dataArrayService.updateScrum(selectSprint);
            this.router.navigate(['/sprint-story'],{ state: { example: selectSprint } } )
          }else {
            this.dataArrayService.removeStory(selectSprint);
            this.router.navigate(['']) ; 
          }
        }
      }
    }
  }

  findCombinations(target: number, items: DataItem[]): DataItem[] | null {
    const filteredItems: DataItem[] = items.filter(item => !item.status);
    let closestTotal = 0;
    let closestCombination: DataItem[] = []; 

    const calculateTotalPoints = (combination: DataItem[]): number => {
        return combination.reduce((acc, item) => acc + item.point, 0);
    };

    for (let i = 0; i < filteredItems.length; i++) {
        const currentItems: DataItem[] = [];
        let currentPoints = 0;

        for (let j = i; j < filteredItems.length; j++) {
            if (currentPoints + filteredItems[j].point <= target) {
                currentItems.push(filteredItems[j]);
                currentPoints += filteredItems[j].point;
            }
        }

        if (currentPoints > 0) {
            const currentTotal = calculateTotalPoints(currentItems);
            if (currentTotal === target) {
                return currentItems; 
            } else if (currentTotal < target && currentTotal > closestTotal) {
                closestTotal = currentTotal;
                closestCombination = currentItems;
            }
        }
    }

    if (closestTotal > 0) {
        return closestCombination;
    } else {
        return null;
    }
  }


  clearStories() {
    this.dataArrayService.clearSorage();
    this.router.navigate([''])

  }
}
