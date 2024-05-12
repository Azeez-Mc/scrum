import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {
  private localStorageKey = 'scrumArray';
  private sprintKey = 'sprint'
  private scrumArraySubject = new BehaviorSubject<any[]>([]);
  scrumArray = this.scrumArraySubject.asObservable();

  private sprintArraySubject = new BehaviorSubject<any[]>([]);
  sprintArray = this.sprintArraySubject.asObservable();
  sprint:any;
  storedData:any;
  constructor() {
    this.storedData = localStorage.getItem(this.localStorageKey);
    this.sprint = localStorage.getItem(this.sprintKey);
    if (this.storedData != null) {
      this.scrumArraySubject.next(JSON.parse(this.storedData));
      console.log(this.storedData, this.scrumArraySubject);
    }else{
    }
    if (this.sprint) {
      this.sprintArraySubject.next(JSON.parse(this.sprint));
    }
  }

  getStoredData () {
    return localStorage.getItem(this.localStorageKey);
  }


  creaateScrum(data: any) {
    const currentValue = this.scrumArraySubject.value;
    const updatedValue = [...currentValue, data];
    this.scrumArraySubject.next(updatedValue);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedValue));
  }


  updateScrum(data: any) {
    console.log('llllll');
    const currentValue = this.scrumArraySubject.value;
    console.log(currentValue);

    let newArray:any = [];

    for(let i = 0; i<currentValue.length; i++) {
      console.log('lll')
      for(let j = 0; j<data.length; j++) {
        if(currentValue[i].point === data[j].point && currentValue[i].date == data[j].date) {
          console.log("ismatched");
          currentValue[i].status = true;
          newArray.push(currentValue[i])
          break;
        }
      }
    }

    console.log(newArray,"line 49");
    this.scrumArraySubject.next(currentValue);
    localStorage.setItem(this.localStorageKey, JSON.stringify(currentValue));
    this.createSprint(newArray)
  }

  createSprint(sprint:any) {
    const currentSprint = this.sprintArraySubject.value;
    let sprintJson = {
        sprintName:"sprint"+currentSprint.length,
        sprint:sprint
      }
      let aa = [...currentSprint, sprintJson];
      this.sprintArraySubject.next(aa);
      localStorage.setItem(this.sprintKey, JSON.stringify(aa));
  }

  removeStory(data:any) {
   
    const currentValue = this.scrumArraySubject.value;
    console.log(currentValue);

    let newArray:any = currentValue;

    for(let i = 0; i<currentValue.length; i++) {
     
      for(let j = 0; j<data.length; j++) {
        if(currentValue[i].point === data[j].point && currentValue[i].date == data[j].date) {
          console.log("ismatched");
          newArray.splice(i,1)
          break;
        }
      }
    }
    console.log(newArray,"line 97");
    this.scrumArraySubject.next(newArray);
    localStorage.setItem(this.localStorageKey, JSON.stringify(newArray));
  }

  clearSorage() {
    localStorage.clear();
    this.storedData = null;
    this.scrumArraySubject.next([])
  }
}