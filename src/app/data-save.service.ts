import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {
  private localStorageKey = 'scrumArray';
  private scrumArraySubject = new BehaviorSubject<any[]>([]);
  scrumArray = this.scrumArraySubject.asObservable();
  storedData:any;
  constructor() {
    // Retrieve stored data from local storage on service initialization
    this.storedData = localStorage.getItem(this.localStorageKey);
    if (this.storedData) {
      this.scrumArraySubject.next(JSON.parse(this.storedData));
    }
  }

  getStoredData () {
    return localStorage.getItem(this.localStorageKey);
  }
  updateScrum(data: any) {
    const currentValue = this.scrumArraySubject.value;
    const updatedValue = [...currentValue, data];
    this.scrumArraySubject.next(updatedValue);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedValue));
  }

  clearSorage() {
    localStorage.clear();
    this.storedData = null
  }
}