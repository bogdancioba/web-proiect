import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, Point } from 'chart.js';
import { DateTime } from 'luxon';
import 'chartjs-adapter-luxon';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements AfterViewInit {
  @ViewChild('priceChart', { static: false }) priceChart!: ElementRef;
  private chart?: Chart;
  private initialStockPrice: number = 100; // starting price
  private chartData: ChartData = {
    datasets: [
      {
        label: 'Stock Price',
        data: [],
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
        datalabels: {
          display: false // Disable data labels
        }
      }
    ]
  };
  private chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second'
        }
      },
      y: {
        suggestedMin: this.initialStockPrice - 5,
        suggestedMax: this.initialStockPrice + 5
      }
    }
  };

  ngAfterViewInit() {
    Chart.register(ChartDataLabels);
  
    this.chart = new Chart(this.priceChart.nativeElement, {
      type: 'line',
      data: this.chartData,
      options: this.chartOptions,
      plugins: [ChartDataLabels],
    });
  
    this.generateRandomStockData();
  }
  
  generateRandomStockData() {
    setInterval(() => {
      let change = Math.random() * 2 - 1; // Random float between -1 and 1
      this.initialStockPrice += change;
      let newPoint: Point = { x: DateTime.local().toJSDate().getTime(), y: this.initialStockPrice };
      this.chartData.datasets![0].data!.push(newPoint);
      this.chart!.update();
    }, 1000);
  }
}
