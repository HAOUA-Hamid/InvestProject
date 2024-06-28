import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, DropdownModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  displayAddDialog: boolean = false;
  newUser: User = {} as User;
  roles: any[] = [
    { name: 'Investor', value: 'investor' },
    { name: 'Entrepreneur', value: 'entrepreneur' },
    { name: 'Admin', value: 'admin' }
  ];

  ngOnInit() {
    // In a real application, you would fetch users from a service
    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'investor' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'entrepreneur' },
      { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' }
    ];
  }

  showAddDialog() {
    this.newUser = {} as User;
    this.displayAddDialog = true;
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.newUser.id = this.users.length + 1;
      this.users.push(this.newUser);
      this.displayAddDialog = false;
      this.newUser = {} as User;
    }
  }
}
