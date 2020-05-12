import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/index';

const GET_USER_URL = `${environment.Config.apiUrl}getUser`

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }
  getUser()
  {
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get(GET_USER_URL)
  }
}
