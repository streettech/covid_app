import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepService {
  constructor() { }

  public getQuestions() {
    const _questions = [
      "Do you feel sick?",
      "Are you coughing?",
      "Are you constantly tired?",
      "Do you have a high temperature?"
    ]
    return _questions;
  }
}
