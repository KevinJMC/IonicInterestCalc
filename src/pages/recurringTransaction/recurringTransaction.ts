import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InterestCalculationPage } from '../interest-calculation/interest-calculation';
import { TransactionPage } from '../../app/app.transaction/app.transaction'; 


@Component({
  selector: 'recurring-transaction-page',
  templateUrl: 'recurringTransaction.html'
})
export class RecurringTransactionPage {

  private account:any = {
		id:'',
		interestRate:'',
		balance:'',
    minBalance: ''
	}

  transaction: TransactionPage = {
    amount: null,
    frequency: null
  };
  recurringTransactions : TransactionPage[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = navParams.get('account');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringTransactionPage');
  }

  addTransaction() {
    this.recurringTransactions.push(this.transaction);
    this.transaction.amount = null;
    this.transaction.frequency = null;
  }

  submit() {
    console.log(this.recurringTransactions);
    this.navCtrl.push(InterestCalculationPage, {'account':this.account})
  }
}
