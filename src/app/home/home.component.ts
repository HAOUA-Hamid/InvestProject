import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../header/header.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, HeaderComponent, DecimalPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentYear: number;
  featuredProjects: any[] = [];

  constructor(private projectService: ProjectService) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
    this.loadFeaturedProjects();
  }

  loadFeaturedProjects() {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.featuredProjects = projects.slice(0, 3);
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
  features = [
    { title: 'Easy to Use', description: 'Our intuitive interface makes task management a breeze.', icon: 'pi pi-check-circle' },
    { title: 'Collaborative', description: 'Share and collaborate on projects with your team in real-time.', icon: 'pi pi-users' },
    { title: 'Customizable', description: 'Tailor the app to your needs with custom fields and workflows.', icon: 'pi pi-cog' }
  ];
  crowdfundingInfo = {
    definition: "Crowdfunding or collaborative financing is an alternative form of disintermediated financing (outside of bank financing) that relies on a digital platform connecting a community of contributors with project owners seeking funding.",
    targetAudience: "This financing method is intended for all types of project owners (individuals, entrepreneurs, associations, cooperatives, companies, etc.) who do not have the necessary funds to implement their projects. These may be project owners who cannot access traditional financing from a banking institution, or those looking for a complementary solution to traditional financing options to complete their financing plan.",
    advantages: [
      "Crowdfunding allows a large number of contributors to participate with small amounts in projects with economic, social, or cultural impacts.",
      "It allows project owners to rely on an expanded community of contributors who can publicize the project and facilitate communication about its contributions.",
      "Beyond funding considerations, using an expanded community of lenders or donors allows, in a way, to validate the interest and concept of the project by this community.",
      "Crowdfunding allows the project owner to gain visibility among potential future customers or users."
    ]
  };
}