import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

interface Investment {
  id: number;
  projectName: string;
  amount: number;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-my-investments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './my-investments.component.html',
  styleUrls: ['./my-investments.component.scss']
})
export class MyInvestmentsComponent implements OnInit {
  investments: Investment[] = [];
  investmentDialog: boolean = false;
  investment: Investment = {} as Investment;
  submitted: boolean = false;
  statuses: any[] = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Active', value: 'Active' },
    { label: 'Completed', value: 'Completed' }
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.investments = [
      { id: 1, projectName: 'Green Energy Solutions', amount: 10000, date: new Date('2024-01-15'), status: 'Active' },
      { id: 2, projectName: 'AI-Driven Healthcare', amount: 25000, date: new Date('2024-02-20'), status: 'Pending' },
      { id: 3, projectName: 'Sustainable Agriculture', amount: 15000, date: new Date('2024-03-10'), status: 'Completed' }
    ];
  }

  openNew() {
    this.investment = {} as Investment;
    this.submitted = false;
    this.investmentDialog = true;
  }

  deleteInvestment(investment: Investment) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this investment in ' + investment.projectName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.investments = this.investments.filter(i => i.id !== investment.id);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Investment Deleted', life: 3000});
      }
    });
  }

  editInvestment(investment: Investment) {
    this.investment = {...investment};
    this.investmentDialog = true;
  }

  hideDialog() {
    this.investmentDialog = false;
    this.submitted = false;
  }

  saveInvestment() {
    this.submitted = true;

    if (this.investment.projectName?.trim()) {
      if (this.investment.id) {
        const index = this.investments.findIndex(i => i.id === this.investment.id);
        this.investments[index] = this.investment;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Investment Updated', life: 3000});
      }
      else {
        this.investment.id = this.createId();
        this.investments.push(this.investment);
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Investment Created', life: 3000});
      }

      this.investments = [...this.investments];
      this.investmentDialog = false;
      this.investment = {} as Investment;
    }
  }

  createId(): number {
    let id = 0;
    for (var i = 0; i < this.investments.length; i++) {
      if (this.investments[i].id > id) {
        id = this.investments[i].id;
      }
    }
    return id + 1;
  }
}
