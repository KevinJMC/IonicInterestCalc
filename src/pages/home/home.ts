import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InterestCalculationPage } from '../interest-calculation/interest-calculation';
import { CreateAccountPage } from '../create-account/create-account';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  account: any = {
    id: ''
  }

  constructor(public navCtrl: NavController) {
    
  }

  submit() {
    this.navCtrl.push(InterestCalculationPage, this.account)
  }

  createAccount() {
    this.navCtrl.push(CreateAccountPage);
  }

}
