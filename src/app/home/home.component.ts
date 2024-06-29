import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule,HeaderComponent, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentYear: number;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  features = [
    { title: 'Easy to Use', description: 'Our intuitive interface makes task management a breeze.', icon: 'pi pi-check-circle' },
    { title: 'Collaborative', description: 'Share and collaborate on projects with your team in real-time.', icon: 'pi pi-users' },
    { title: 'Customizable', description: 'Tailor the app to your needs with custom fields and workflows.', icon: 'pi pi-cog' }
  ];
  featuredProjects = [
    { name: 'Green Energy Solutions', description: 'Innovative solar panel technology for residential areas.', fundingGoal: 500000, image: '001.jpg' },
    { name: 'AI-Driven Healthcare', description: 'Machine learning algorithms for early disease detection.', fundingGoal: 1000000, image: '002.jpg' },
    { name: 'Sustainable Agriculture', description: 'Vertical farming solutions for urban environments.', fundingGoal: 750000, image: '003.jpg' }
  ];
}
