import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { UserService } from '../../services/user.service';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, DialogModule, InputTextModule, DropdownModule, FormsModule, HttpClientModule],
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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  showAddDialog() {
    this.newUser = {} as User;
    this.displayAddDialog = true;
  }

  addUser() {
    if (this.newUser.username && this.newUser.email && this.newUser.phoneNumber && this.newUser.password) {
      this.userService.addUser(this.newUser).subscribe((user) => {
        this.users.push(user);
        this.displayAddDialog = false;
        this.newUser = {} as User;
      });
    }
  }
}
