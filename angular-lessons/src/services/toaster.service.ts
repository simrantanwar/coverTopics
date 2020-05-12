import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ToasterService {
  message = new BehaviorSubject({});
  currrentMessage = this.message.asObservable();

  showToaster(data) {
this.message.next(data)
  }

}
