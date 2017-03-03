import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RecurringTransactionPage } from '../recurringTransaction/recurringTransaction'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private account:any = {
		id:'',
		interestRate:'',
		balance:'',
    minBalance: '',
	}

  constructor(public navCtrl: NavController) {
    
  }

  createAccount() {
    console.log(this.account);
    this.navCtrl.push(RecurringTransactionPage);
  }

}
