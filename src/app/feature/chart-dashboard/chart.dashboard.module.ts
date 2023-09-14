import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartDashboardComponent } from './chart-dashboard.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsService } from './charts/charts.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [ChartDashboardComponent,
    BarChartComponent,
    LineChartComponent,
    TableComponent,
    SummaryComponent
  ],
  imports: [RouterModule.forChild([{ path: '', component: ChartDashboardComponent}]),  SharedModule,HttpClientModule,NgxPaginationModule],
  exports: [RouterModule],
  providers:[ChartsService]
})
export class ChartDashboardModule {}