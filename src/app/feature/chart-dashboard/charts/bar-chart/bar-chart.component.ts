

import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public chart: any;

  constructor(private _chartService: ChartsService) {Chart.register(...registerables);}

  ngOnInit(): void {
    this._chartService.dailyForecast()
      .subscribe((res: any) => {

        let temp_max = res['list'].map((res: any) => res.main.temp_max);
        let temp_min = res['list'].map((res: any) => res.main.temp_min);
        let alldates = res['list'].map((res: any) => res.dt);

        let weatherDates: string[] = [];
        alldates.forEach((res: number) => {
          let jsdate = new Date(res * 1000);
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
        });

        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
              // barThickness: 10,
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
             //   barThickness: 10,
              },
            ]
          },
          options: {
            aspectRatio: 2,
            // legend: {
            //   display: false
            // },
            // scales: {
            //   xAxes: [{
            //     display: true
            //   }],
            //   yAxes: [{
            //     display: false
            //   }]
            // }
          }
        });

      });
  }

}
