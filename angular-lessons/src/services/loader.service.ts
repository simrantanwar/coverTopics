import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class LoaderService {
  state = new BehaviorSubject(false);
  currentState = this.state.asObservable();

  constructor() { }

  showLoader(data)
  {
    this.state.next(data);
  }
}
