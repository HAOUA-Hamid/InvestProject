import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, InputTextModule, ButtonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() showNewsletter: boolean = true;
  @Input() companyName: string = 'InvestHub';
  @Input() currentYear: number = new Date().getFullYear();

  footerLinks = [
    { label: 'About Us', url: '/about' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Contact Us', url: '/contact' }
  ];

  socialLinks = [
    { icon: 'pi pi-facebook', url: 'https://facebook.com' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com' },
    { icon: 'pi pi-github', url: 'https://github.com' }
  ];

  subscribeToNewsletter(email: string) {
    // Implement newsletter subscription logic here
    console.log(`Subscribing ${email} to newsletter`);
  }
}
