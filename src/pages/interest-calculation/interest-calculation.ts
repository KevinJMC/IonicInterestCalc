import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the InterestCalculation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-interest-calculation',
  templateUrl: 'interest-calculation.html'
})
export class InterestCalculationPage {

  private account:any = {
		id:'',
		interestRate:'',
		balance:'',
    minBalance: ''
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = navParams.get('account');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestCalculationPage');
  }

}
