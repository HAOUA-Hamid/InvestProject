import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

interface Project {
  id: number;
  name: string;
  description: string;
  fundingGoal: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-project-approval',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './project-approval.component.html',
  styleUrls: ['./project-approval.component.scss']
})
export class ProjectApprovalComponent implements OnInit {
  projects: Project[] = [];
  project: Project = {} as Project;
  projectDialog: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // Mock data - in a real application, this would come from a service
    this.projects = [
      { id: 1, name: 'Eco-Friendly Water Bottles', description: 'Biodegradable water bottles made from plant-based materials.', fundingGoal: 50000, status: 'Pending' },
      { id: 2, name: 'Smart Home Energy System', description: 'AI-powered system to optimize home energy usage.', fundingGoal: 100000, status: 'Pending' },
      { id: 3, name: 'Urban Vertical Farm', description: 'Innovative vertical farming solution for cities.', fundingGoal: 75000, status: 'Pending' }
    ];
  }

  viewProject(project: Project) {
    this.project = { ...project };
    this.projectDialog = true;
  }

  hideDialog() {
    this.projectDialog = false;
  }

  approveProject(project: Project) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to approve this project?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        project.status = 'Approved';
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Project Approved', life: 3000 });
      }
    });
  }

  rejectProject(project: Project) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to reject this project?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        project.status = 'Rejected';
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Project Rejected', life: 3000 });
      }
    });
  }
}
