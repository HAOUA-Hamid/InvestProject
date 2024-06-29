import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

interface Project {
  id: number;
  name: string;
  description: string;
  fundingGoal: number;
  image: string;
}

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectDialog: boolean = false;
  project: Project = {} as Project;
  submitted: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.projects = [
      { id: 1, name: 'Green Energy Solutions', description: 'Innovative solar panel technology for residential areas.', fundingGoal: 500000, image: '001.jpg' },
      { id: 2, name: 'AI-Driven Healthcare', description: 'Machine learning algorithms for early disease detection.', fundingGoal: 1000000, image: '002.jpg' },
      { id: 3, name: 'Sustainable Agriculture', description: 'Vertical farming solutions for urban environments.', fundingGoal: 750000, image: '003.jpg' }
    ];
  }

  openNew() {
    this.project = {} as Project;
    this.submitted = false;
    this.projectDialog = true;
  }

  deleteProject(project: Project) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + project.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.projects = this.projects.filter(p => p.id !== project.id);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Deleted', life: 3000});
      }
    });
  }

  editProject(project: Project) {
    this.project = {...project};
    this.projectDialog = true;
  }

  hideDialog() {
    this.projectDialog = false;
    this.submitted = false;
  }

  saveProject() {
    this.submitted = true;

    if (this.project.name?.trim()) {
      if (this.project.id) {
        const index = this.projects.findIndex(p => p.id === this.project.id);
        this.projects[index] = this.project;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Updated', life: 3000});
      }
      else {
        this.project.id = this.createId();
        this.project.image = 'project-placeholder.png';
        this.projects.push(this.project);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Created', life: 3000});
      }

      this.projects = [...this.projects];
      this.projectDialog = false;
      this.project = {} as Project;
    }
  }

  createId(): number {
    let id = 0;
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id > id) {
        id = this.projects[i].id;
      }
    }
    return id + 1;
  }
}
