import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;

  constructor(private _chartService: ChartsService) {   Chart.register(...registerables);}


  ngOnInit(): void {
    this._chartService.dailyForecast()
      .subscribe((res:any) => {
        let temp_max = res['list'].map((res: any) => res.main.temp_max);
        let temp_min = res['list'].map((res: any) => res.main.temp_min);
        let alldates = res['list'].map((res: any) => res.dt);

        let weatherDates: string[] = [];
        alldates.forEach((res: number) => {
          let jsdate = new Date(res * 1000);
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
        });

        this.chart = new Chart('myCanvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
      
        });

      });
  }

}
