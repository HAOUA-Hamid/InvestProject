import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userRole: 'investor' | 'entrepreneur' | 'admin' = 'entrepreneur';
  @Input() userName: string = 'User';

  items: MenuItem[] = [];

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

    const roleSpecificItems: MenuItem[] = this.getRoleSpecificItems();

    this.items = [...commonItems, ...roleSpecificItems];
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
}
