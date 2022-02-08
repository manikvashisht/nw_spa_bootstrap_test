import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadData } from 'src/app/components/home/home.component';


@Injectable({
  providedIn: 'root',
})
export class LoanDataService {
  constructor(private httpService: HttpClient) {}


  getLoanDetails(userName: string) {
    return this.httpService.get<LoadData>(
      `http://localhost:8080/api/v1/users/loan-details/user/${userName}`
    );
  }

  getBrokerDetails(userName: string) {
    return this.httpService.get<LoadData>(
      `http://localhost:8080/api/v1/users/broker-details/user/${userName}`
    );
  }

  getMarketDetails(userName: string) {
    return this.httpService.get<LoadData>(
      `http://localhost:8080/api/v1/users/market-details/user/${userName}`
    );
  }
}
