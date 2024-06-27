import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

interface InvestmentOffer {
  id: number;
  investorName: string;
  amount: number;
  interestAreas: string[];
  minimumReturn: number;
  maxRiskLevel: 'Low' | 'Medium' | 'High';
}

@Component({
  selector: 'app-investment-offers',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TagModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './investment-offers.component.html',
  styleUrls: ['./investment-offers.component.scss']
})
export class InvestmentOffersComponent implements OnInit {
  offers: InvestmentOffer[] = [];
  displayModal: boolean = false;
  selectedOffer: InvestmentOffer | null = null;
  projectProposal = {
    name: '',
    description: '',
    requestedFunding: 0,
    expectedReturn: 0
  };

  ngOnInit() {
    // In a real application, you would fetch this data from a service
    this.offers = [
      { id: 1, investorName: 'Global Ventures', amount: 1000000, interestAreas: ['Technology', 'Healthcare'], minimumReturn: 10, maxRiskLevel: 'Medium' },
      { id: 2, investorName: 'Green Earth Fund', amount: 500000, interestAreas: ['Renewable Energy', 'Sustainability'], minimumReturn: 8, maxRiskLevel: 'Low' },
      { id: 3, investorName: 'Innovation Capital', amount: 2000000, interestAreas: ['AI', 'Biotech', 'Fintech'], minimumReturn: 15, maxRiskLevel: 'High' },
      { id: 4, investorName: 'Urban Development Group', amount: 750000, interestAreas: ['Real Estate', 'Smart Cities'], minimumReturn: 12, maxRiskLevel: 'Medium' },
      { id: 5, investorName: 'Future Food Investments', amount: 300000, interestAreas: ['AgriTech', 'Food Science'], minimumReturn: 9, maxRiskLevel: 'Low' },
    ];
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  getRiskLevelSeverity(riskLevel: string) {
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

  openProposalModal(offer: InvestmentOffer) {
    this.selectedOffer = offer;
    this.displayModal = true;
  }

  submitProposal() {
    console.log('Proposal submitted:', this.projectProposal);
    // Here you would typically send this data to a backend service
    this.displayModal = false;
    this.projectProposal = { name: '', description: '', requestedFunding: 0, expectedReturn: 0 };
  }
}
