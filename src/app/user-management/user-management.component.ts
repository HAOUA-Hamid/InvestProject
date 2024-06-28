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
  displayDialog: boolean = false;
  user: User = {} as User;
  newUser: boolean = false;
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

  showDialogToAdd() {
    this.newUser = true;
    this.user = {} as User;
    this.displayDialog = true;
  }

  save() {
    if (this.newUser) {
      this.users.push(this.user);
    } else {
      // Update existing user
      const index = this.findSelectedUserIndex();
      this.users[index] = this.user;
    }
    this.user = {} as User;
    this.displayDialog = false;
  }

  delete() {
    const index = this.findSelectedUserIndex();
    this.users = this.users.filter((val, i) => i !== index);
    this.user = {} as User;
    this.displayDialog = false;
  }

  onRowSelect(event: any) {
    this.newUser = false;
    this.user = { ...event.data };
    this.displayDialog = true;
  }

  findSelectedUserIndex(): number {
    return this.users.indexOf(this.user);
  }
}
