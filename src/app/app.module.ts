import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecurringTransactionPage } from '../pages/recurringTransaction/recurringTransaction';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { InterestCalculationPage } from '../pages/interest-calculation/interest-calculation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecurringTransactionPage,
    CreateAccountPage,
    InterestCalculationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccountPage,
    InterestCalculationPage,
    RecurringTransactionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
