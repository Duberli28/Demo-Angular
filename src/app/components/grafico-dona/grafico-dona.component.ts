import { Component, OnInit,Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData!:any;
  public doughnutChartData2: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }
  
  ngOnInit(): void {
    
      this.doughnutChartData2.labels= this.doughnutChartData.labels,
      this.doughnutChartData2.datasets= this.doughnutChartData.datasets
    
  }

}
