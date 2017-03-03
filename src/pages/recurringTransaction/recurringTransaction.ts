import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'recurring-transaction-page',
  templateUrl: 'recurringTransaction.html'
})
export class RecurringTransactionPage {

  amount: number;
  frequency: number;
  recurringTransactions;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringTransactionPage');
  }

  addTransaction() {
    console.log(this.amount);
    console.log(this.frequency);
    
  }

}
