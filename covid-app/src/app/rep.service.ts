import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendService } from 'angular-in-memory-web-api';

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
      "Do you have a high temperature?",
      "Does ur dog hurt?",
      "Did u kill the chicken crossing the road?"
    ]
    return _questions;
  }
}
