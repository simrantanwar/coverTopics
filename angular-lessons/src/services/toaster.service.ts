import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  message = new BehaviorSubject({});
  currrentMessage = this.message.asObservable();

  showToaster(data) {
this.message.next(data)
  }

}
