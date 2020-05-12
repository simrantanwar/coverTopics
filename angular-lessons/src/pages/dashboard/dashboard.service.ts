import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) { }

  getChartData()
  {
    return this.http.get('./assets/data.json')
  }
}
