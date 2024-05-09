import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DataSaveService } from '../data-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss'
})


// interface JsonFormValidators {
//   name: string;
//   point: number;
// }

export class StoryFormComponent implements OnInit{

  submitForm:FormGroup;
  isSubmitted =false;

  constructor(private fb: FormBuilder,
    private http : HttpClient,
    private dataArrayService : DataSaveService,
    private router :Router
  ) {}

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      story: ['',Validators.required],
      point: ['', [Validators.required, Validators.max(5), Validators.min(1)]],
    })
    
  }

  get formValidation():any {
    return this.submitForm.controls;
  }
  

  onSubmit(){
    this.isSubmitted = true;
    if(this.submitForm.invalid) {
      return
    }else{
      console.log('kkk', this.formValidation);
       const formData = this.submitForm.value;
      this.dataArrayService.updateScrum(formData);
      this.router.navigate([''])

    }


   

  }
}
