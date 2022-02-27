import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RepService } from '../rep.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questionsForm = this.fb.group({
    question_0: ['', Validators.required],
    question_1: ['', Validators.required],
    question_2: ['', Validators.required],
    question_3: ['', Validators.required],
    question_4: ['', Validators.required],
    question_5: ['', Validators.required]
  });

  public _questions = [""];

  constructor(private fb: FormBuilder, private rs: RepService) { }

  ngOnInit(): void {
    this._questions = this.rs.getQuestions();
  }

  public onSubmit(): void {

  }

  public onClick(): void {
    console.warn("clicked");
  }
}
