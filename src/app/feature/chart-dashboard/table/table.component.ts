import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ChartsService } from '../charts/charts.service';
import { NgxPaginationModule } from 'ngx-pagination'; 

export interface Report {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  date: Date;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page: number = 1; 
  itemsPerPage: number = 5;
  displayedColumns: string[] = ['Temp', 'Min Temp', 'MaxTemp', 'Humidity'];
  tableData : any= [];
  constructor(private _chartService: ChartsService) { }

  ngOnInit(): void {
    let obj = {};
    this._chartService.dailyForecast()
      .subscribe((res:any) => {
      res['list'].map((res: any) => {

      this.tableData.push({ 
        temp: res.main.temp,
        temp_min: res.main.temp_min,
        temp_max: res.main.temp_max,
        humidity: res.main.humidity
      });
      });
      });
      this.test();
  }

  test(){
    console.log(this.tableData);
  }
}
