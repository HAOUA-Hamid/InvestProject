import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, CardModule, InputTextModule, InputTextareaModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private messageService: MessageService) {}

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
    // Show success message
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Your message has been sent!'});
    // Reset form after submission
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
