import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, AvatarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userRole: 'investor' | 'entrepreneur' | 'admin' | null = null;
  @Input() userName: string | null = null;

  items: MenuItem[] = [];
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeMenu();
  }

  initializeMenu() {
    const commonItems: MenuItem[] = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      }
    ];

    const roleSpecificItems: MenuItem[] = this.userRole ? this.getRoleSpecificItems() : [];

    const userMenuItem: MenuItem[] = this.userName ? [
      {
        label: this.userName,
        icon: 'pi pi-user',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user-edit',
            routerLink: ['/profile']
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
          }
        ]
      }
    ] : [];

    this.items = [...commonItems, ...roleSpecificItems, ...userMenuItem];
  }

  getRoleSpecificItems(): MenuItem[] {
    switch(this.userRole) {
      case 'investor':
        return [
          {
            label: 'My Investments',
            icon: 'pi pi-chart-bar',
            routerLink: ['/my-investments']
          },
          {
            label: 'Investment Opportunities',
            icon: 'pi pi-list',
            routerLink: ['/investment-projects']
          }
        ];
      case 'entrepreneur':
        return [
          {
            label: 'My Projects',
            icon: 'pi pi-briefcase',
            routerLink: ['/my-projects']
          },
          {
            label: 'Find Investors',
            icon: 'pi pi-search-dollar',
            routerLink: ['/investment-offers']
          }
        ];
      case 'admin':
        return [
          {
            label: 'User Management',
            icon: 'pi pi-users',
            routerLink: ['/user-management']
          },
          {
            label: 'Project Approval',
            icon: 'pi pi-check-square',
            routerLink: ['/project-approval']
          },
          {
            label: 'Analytics',
            icon: 'pi pi-chart-line',
            routerLink: ['/analytics']
          }
        ];
      default:
        return [];
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    
    console.log('Logging out');
    // After logout, reset user info and reinitialize menu
    this.userRole = null;
    this.userName = null;
    this.initializeMenu();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.userName !== null && this.userRole !== null;
  }
}