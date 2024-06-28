import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, CardModule],
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {
  @Output() userAdded = new EventEmitter<User>();

  newUser: User = {
    name: '',
    email: '',
    role: ''
  };

  roles: any[] = [
    { name: 'Investor', value: 'investor' },
    { name: 'Entrepreneur', value: 'entrepreneur' },
    { name: 'Admin', value: 'admin' }
  ];

  addUser() {
    if (this.validateUser()) {
      this.userAdded.emit(this.newUser);
      this.resetForm();
    }
  }

  validateUser(): boolean {
    return this.newUser.name.trim() !== '' &&
      this.newUser.email.trim() !== '' &&
      this.newUser.role !== '';
  }

  resetForm() {
    this.newUser = {
      name: '',
      email: '',
      role: ''
    };
  }
}
