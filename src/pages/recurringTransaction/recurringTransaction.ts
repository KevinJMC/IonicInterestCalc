import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InterestCalculationPage } from '../interest-calculation/interest-calculation';
import { Transaction } from '../../app/app.transaction/app.transaction'; 


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

  transaction: Transaction = {
    amount: null,
    frequency: null
  };
  recurringTransactions : Transaction[] = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.account = navParams.get('account');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringTransactionPage');
  }

  addTransaction() {
    let prompt = this.alertCtrl.create({
            title: 'Add Recurring Transaction',
            inputs: [{
                 name: 'amount',
                 placeholder: 'Enter Amount',
            },
            {
                 name: 'frequency',
                 placeholder: 'Enter Frequency in Days',
            }
            ],
            buttons: [
                {text: 'Cancel'},
                {
                    text: 'Add',
                    handler: data => {
                        this.recurringTransactions.push(data);
                    }
                }
            ]
        });
        prompt.present();
  }

  submit() {
    console.log(this.recurringTransactions);
    this.navCtrl.push(InterestCalculationPage, {'account':this.account})
  }
}
