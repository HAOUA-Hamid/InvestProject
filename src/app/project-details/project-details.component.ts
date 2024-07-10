import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, CardModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = +params['id']; // Convert to number
      this.loadProject(projectId);
    });
  }

  loadProject(id: number) {
    this.projectService.getProjectById(id).subscribe(
      (project) => {
        this.project = project;
      },
      (error) => {
        console.error('Error fetching project:', error);
      }
    );
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }
}