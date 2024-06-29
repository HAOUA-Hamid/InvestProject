import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChartModule,
    TableModule
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  // Overall Statistics
  totalProjects: number = 0;
  totalInvestors: number = 0;
  totalFunding: number = 0;

  // Project Status Chart
  projectStatusData: any;
  projectStatusOptions: any;

  // Investment Trend Chart
  investmentTrendData: any;
  investmentTrendOptions: any;

  // Top Projects Table
  topProjects: any[] = [];

  // Top Investors Table
  topInvestors: any[] = [];

  constructor() {}

  ngOnInit() {
    this.initializeData();
    this.setupProjectStatusChart();
    this.setupInvestmentTrendChart();
  }

  initializeData() {
    // In a real application, this data would come from a service connected to your backend
    this.totalProjects = 150;
    this.totalInvestors = 500;
    this.totalFunding = 5000000;

    this.topProjects = [
      { name: 'Eco-Friendly Water Bottles', funding: 250000, investors: 50 },
      { name: 'Smart Home Energy System', funding: 500000, investors: 75 },
      { name: 'Urban Vertical Farm', funding: 350000, investors: 60 },
      { name: 'AI-Driven Healthcare', funding: 750000, investors: 100 },
      { name: 'Renewable Energy Storage', funding: 600000, investors: 80 }
    ];

    this.topInvestors = [
      { name: 'John Doe', totalInvested: 500000, projectsInvested: 10 },
      { name: 'Jane Smith', totalInvested: 750000, projectsInvested: 15 },
      { name: 'Bob Johnson', totalInvested: 400000, projectsInvested: 8 },
      { name: 'Alice Brown', totalInvested: 600000, projectsInvested: 12 },
      { name: 'Charlie Davis', totalInvested: 350000, projectsInvested: 7 }
    ];
  }

  setupProjectStatusChart() {
    this.projectStatusData = {
      labels: ['Pending', 'Active', 'Completed', 'Rejected'],
      datasets: [
        {
          data: [30, 50, 60, 10],
          backgroundColor: ['#FF9900', '#36A2EB', '#4BC0C0', '#FF6384'],
          hoverBackgroundColor: ['#FFB340', '#6DC5FF', '#7DE2E2', '#FF8EAB']
        }
      ]
    };

    this.projectStatusOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }

  setupInvestmentTrendChart() {
    this.investmentTrendData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Investment Amount',
          data: [650000, 590000, 800000, 810000, 960000, 1000000, 1200000],
          fill: false,
          borderColor: '#4BC0C0',
          tension: 0.4
        }
      ]
    };

    this.investmentTrendOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }
}
