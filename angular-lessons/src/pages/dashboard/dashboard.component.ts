import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  @ViewChild('chart', { static: true }) chart: ElementRef;
  constructor(private dashboard_service: DashboardService) {
  }

  ngOnInit() {

    this.dashboard_service.getChartData().subscribe((resp: any) => {
      if (resp.success) {

        let chartData = resp.result.map(x => ({ label: x.country, value: x.amount }));

        this.prepareChartData(chartData);
      }
    });

    this.drawChartJS();

  }

  prepareChartData(response) {
    this.dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion",
        yAxisMaxvalue: "450",
        divLineDashed: "1",
      },
      data: response
    };
  }

  drawChartJS() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
     }
}
