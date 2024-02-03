import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { EchartsPieComponent } from './inventory/echarts-pie.component';
import { EchartsDonutComponent } from './inventory/echarts-donut.component';
import { ProfitCardComponent } from './inventory/profit-card/profit-card.component';
import { StatsCardFrontComponent } from './inventory/profit-card/front-side/stats-card-front.component';
import { StatsCardBackComponent } from './inventory/profit-card/back-side/stats-card-back.component';
import { StatsBarAnimationChartComponent } from './inventory/profit-card/front-side/stats-bar-animation-chart.component';
import { StatsAreaChartComponent } from './inventory/profit-card/back-side/stats-area-chart.component';


@NgModule({
  declarations: [
    EchartsPieComponent,
    EchartsDonutComponent,
    ProfitCardComponent,
    StatsCardFrontComponent,
    StatsCardBackComponent,
  InventoryComponent,
  StatsBarAnimationChartComponent,
  StatsAreaChartComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
    NbIconModule
  ]
})
export class InventoryModule { }
