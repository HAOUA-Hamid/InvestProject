import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    { title: 'Easy to Use', description: 'Our intuitive interface makes task management a breeze.', icon: 'pi pi-check-circle' },
    { title: 'Collaborative', description: 'Share and collaborate on projects with your team in real-time.', icon: 'pi pi-users' },
    { title: 'Customizable', description: 'Tailor the app to your needs with custom fields and workflows.', icon: 'pi pi-cog' }
  ];
}
