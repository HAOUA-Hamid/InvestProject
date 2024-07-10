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
import { ProjectService } from '../../services/project.service';

interface Project {
  id: number;
  title: string;
  description: string;
  investorCount: number;
  photoUrls: string[];
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
    private messageService: MessageService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Failed to load projects', life: 3000});
      }
    );
  }

  openNew() {
    this.project = {} as Project;
    this.submitted = false;
    this.projectDialog = true;
  }

  deleteProject(project: Project) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + project.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.projectService.deleteProject(project.id).subscribe(
          () => {
            this.projects = this.projects.filter(p => p.id !== project.id);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Deleted', life: 3000});
          },
          (error) => {
            console.error('Error deleting project:', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Failed to delete project', life: 3000});
          }
        );
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

    if (this.project.title?.trim()) {
      if (this.project.id) {
        this.projectService.updateProject(this.project).subscribe(
          (updatedProject) => {
            const index = this.projects.findIndex(p => p.id === updatedProject.id);
            this.projects[index] = updatedProject;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Updated', life: 3000});
            this.projectDialog = false;
            this.project = {} as Project;
          },
          (error) => {
            console.error('Error updating project:', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Failed to update project', life: 3000});
          }
        );
      } else {
        this.projectService.createProject(this.project).subscribe(
          (newProject) => {
            this.projects.push(newProject);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Created', life: 3000});
            this.projectDialog = false;
            this.project = {} as Project;
          },
          (error) => {
            console.error('Error creating project:', error);
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Failed to create project', life: 3000});
          }
        );
      }
    }
  }
}