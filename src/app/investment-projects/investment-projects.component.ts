import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

interface Project {
  id: number;
  name: string;
  description: string;
  fundingGoal: number;
  currentFunding: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  category: string;
  rating: number;
}

@Component({
  selector: 'app-investment-projects',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, TagModule, RatingModule, FormsModule],
  templateUrl: './investment-projects.component.html',
  styleUrls: ['./investment-projects.component.scss']
})
export class InvestmentProjectsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    // In a real application, you would fetch this data from a service
    this.projects = [
      { id: 1, name: 'Green Energy Solutions', description: 'Solar panel installation for residential areas', fundingGoal: 500000, currentFunding: 250000, riskLevel: 'Low', category: 'Renewable Energy', rating: 4 },
      { id: 2, name: 'AI-Driven Healthcare', description: 'Machine learning for early disease detection', fundingGoal: 1000000, currentFunding: 750000, riskLevel: 'Medium', category: 'Healthcare', rating: 5 },
      { id: 3, name: 'Sustainable Agriculture', description: 'Vertical farming in urban areas', fundingGoal: 300000, currentFunding: 100000, riskLevel: 'Medium', category: 'Agriculture', rating: 3 },
      { id: 4, name: 'Quantum Computing Research', description: 'Developing next-gen quantum processors', fundingGoal: 2000000, currentFunding: 1500000, riskLevel: 'High', category: 'Technology', rating: 4 },
      { id: 5, name: 'Ocean Cleanup Initiative', description: 'Innovative solutions for plastic waste removal', fundingGoal: 750000, currentFunding: 500000, riskLevel: 'Low', category: 'Environment', rating: 5 },
    ];
  }

  getSeverity(riskLevel: string) {
    switch (riskLevel) {
      case 'Low':
        return 'success';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'danger';
      default:
        return 'info';
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  calculateProgress(currentFunding: number, fundingGoal: number): number {
    return (currentFunding / fundingGoal) * 100;
  }
}
