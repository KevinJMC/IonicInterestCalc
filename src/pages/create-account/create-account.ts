import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RecurringTransactionPage } from '../recurringTransaction/recurringTransaction';
import { AccountService } from '../../providers/account-service';

@Component({
  selector: 'page-home',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {

  private account:any = {
		id:'',
		interestRate:'',
		balance:'',
    minBalance: ''
	}

  constructor(public navCtrl: NavController, private acctServ: AccountService) {
    
  }

  createAccount() {
    console.log(this.account);
    this.acctServ.addAccount(this.account)
    this.navCtrl.push(RecurringTransactionPage, {'account' : this.account});
  }

}
