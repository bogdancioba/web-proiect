import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartData, ChartOptions, Point } from 'chart.js';
import { DateTime } from 'luxon';
import 'chartjs-adapter-luxon';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('priceChart', { static: false }) priceChart!: ElementRef;

   initialStockValues: { [key: string]: number } = {
    AAPL: 100,
    TSLA: 200,
    GOOGL: 150,
    BCN: 10000,
    ETH: 2200,
    DOG: 1200,
  };
  private stockValues: { [key: string]: number } = { ...this.initialStockValues };
  private chart?: Chart;
  private initialStockPrice: number = 100; // starting price
  private chartData: ChartData = {
    datasets: [
      {
        label: 'Portfolio Value',
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
  private portfolioValue: number = 0;

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

      this.portfolioValue = Object.keys(this.stockValues).reduce(
        (sum, stock) => sum + (this.stockValues[stock] || 0),
        0
      );

      for (const stock in this.stockValues) {
        if (this.stockValues.hasOwnProperty(stock)) {
          const change = Math.random() * 2 - 1; // Random float between -1 and 1
          this.stockValues[stock] += change;
        }
      }
    }, 1000);
  }

  getStockValue(stock: string): number {
    return this.stockValues[stock] || 0;
  }

  getStockValueColor(stock: string): string {
    const currentValue = this.stockValues[stock] || 0;
    const initialValue = this.initialStockValues[stock] || 0;
    return currentValue > initialValue ? 'green' : currentValue < initialValue ? 'red' : '';
  }
}
