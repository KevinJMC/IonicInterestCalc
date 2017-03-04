import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  data: any;

  basicOptions:RequestOptionsArgs = {
  url: 'http://127.0.0.1:8080/',
  search: null,
  headers: new Headers({'Content-Type':'application/json'}),
  };

  constructor(public http: Http) {}

  getAccount(accountID: String) {
    this.http.post("/account", JSON.stringify({"accountID":accountID}), this.basicOptions).subscribe(res => this.data = res.json);
  }

  addAccount(account: any) {
    this.http.post("/createAccount", JSON.stringify(account),this.basicOptions).subscribe(res => this.data = res.json);
  }

  calculateSimpleInterest(account: any, interval: number) {
    this.http.post("/simpleInterestCalculator", JSON.stringify({"account":account, "interval":interval}), this.basicOptions).subscribe(res => this.data = res.json);
  }

  calculateCompoundInterest(account: any, interval: number, period:number, calculationMethod: string) {
    this.http.post("/compoundInterestCalculator", JSON.stringify({"account":account, "interval":interval, "period":period, "calculationMethod":calculationMethod}), this.basicOptions).subscribe(res => this.data = res.json);
  }



}
