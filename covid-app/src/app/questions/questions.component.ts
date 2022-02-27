import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RepService } from '../rep.service';

@Component({
  selector: '[app-questions]',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public question_form = new FormControl('');

  public _questions = [""];
  public question_num = 0;

  constructor(private _repService: RepService) { }

  ngOnInit(): void {
    this._questions = this._repService.getQuestions();
  }
}
