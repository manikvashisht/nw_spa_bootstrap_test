import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoanDataService } from 'src/app/services/data/loan-data.service';

export class LoadData {
  constructor(
    public loadId: string,
    public loanName: string,
    public detailType: string,
    public couponRate: number,
    public treasureRate: number
  ) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  activeLink: string = '';
  loadData: LoadData = new LoadData('-1', 'dummydata', 'dummtType', 0.0, 0.0);

  constructor(private loadDataService: LoanDataService) {}

  ngOnInit(): void {
    this.activeLink = 'Loan';
  }

  getLoanDetails() {
    this.activeLink = 'Loan';
    console.log('get loan details');
    this.loadData = new LoadData('-1', 'dummydata', 'dummtType', 0.0, 0.0);
  }

  getBrokerDetails() {
    this.activeLink = 'Broker';
    console.log('get broker details');
    this.loadData = new LoadData('-1', 'dummydata', 'dummtType', 0.0, 0.0);
  }

  getMarketDetails() {
    this.activeLink = 'Market';
    console.log('get market details');
    this.loadData = new LoadData('-1', 'dummydata', 'dummtType', 0.0, 0.0);
  }

  handleLoanStatus() {
    if (this.activeLink === 'Loan') {
      this.loadDataService
        .getLoanDetails('dummy')
        .subscribe((data) => (this.loadData = data));
    } else if (this.activeLink === 'Broker') {
      this.loadDataService
        .getBrokerDetails('dummy')
        .subscribe((data) => (this.loadData = data));
    } else if (this.activeLink === 'Market') {
      this.loadDataService
        .getMarketDetails('dummy')
        .subscribe((data) => (this.loadData = data));
    }
  }
}
