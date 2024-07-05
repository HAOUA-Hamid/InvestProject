import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule,ButtonModule,CardModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  project = {
    name: 'AI-Driven Healthcare',
    description: 'Machine learning algorithms for early disease detection.',
    fundingGoal: 1000000,
    image: '002.jpg',  // Assuming you place the image in the assets folder
    features: [
      'Early detection of chronic diseases',
      'Personalized treatment plans',
      'Cost-effective healthcare solutions'
    ],
    marketImpact: 'AI-Driven Healthcare aims to revolutionize the healthcare industry by providing early and accurate disease detection, leading to better patient outcomes and reduced healthcare costs.',
    team: [
      { name: 'Dr. John Doe', role: 'Chief Medical Officer', bio: 'Expert in medical AI with 20 years of experience.' },
      { name: 'Jane Smith', role: 'Lead Data Scientist', bio: 'Data science specialist with a focus on healthcare applications.' }
    ]
  };

  constructor(private router: Router) {}

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}
