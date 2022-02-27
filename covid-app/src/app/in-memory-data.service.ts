import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const _questions = [
      {"question_0": "Do you feel sick?"},
      {"question_1": "Are you coughing?"},
      {"question_2": "Are you constantly tired?"},
      {"question_3": "Do you have a high temperature?"},
      {"question_4": "Does ur dog hurt?"},
      {"question_5": "Did u kill the chicken crossing the road?"}
    ];
    return {_questions};
  }

  constructor() { }
}
