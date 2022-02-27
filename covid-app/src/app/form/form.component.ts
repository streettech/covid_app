import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [, Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required]
    //location_share: ['']
  });

  public genders = ['male', 'female', 'trans', 'queer', 'other'];

  public validate = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.warn('Your order has been submitted');
  }

  public onClick(): void {
    if (this.validate) {
      
    }
    console.warn("clicked")
  }

}
