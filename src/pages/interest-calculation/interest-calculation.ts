import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountService } from '../../providers/account-service';

@Component({
  selector: 'page-interest-calculation',
  templateUrl: 'interest-calculation.html'
})
export class InterestCalculationPage {

  calculationMethod: string;
  interest: number;
  interval: number;
  period: number;
  
  private account:any = {
		id:' ',
		interestRate:'',
		balance:'',
    minBalance: '',
    hasLedger : true
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private acctService: AccountService) {
    this.account = navParams.get('account');
  }

  calculateSimpleInterest(account:any,interval:number) {
    this.acctService.calculateSimpleInterest(account, interval);
    this.interest = this.acctService.data;
  }

  calculateCompoundInterest(account:any, interval: number, period: number, calculationMethod:string) {
    this.acctService.calculateCompoundInterest(account, interval, period, calculationMethod);
    this.interest = this.acctService.data;
  }

}
