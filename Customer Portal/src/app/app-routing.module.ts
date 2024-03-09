import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditdebitComponent } from './creditdebit/creditdebit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DebitComponent } from './debit/debit.component';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { InvoicedataComponent } from './invoicedata/invoicedata.component';
import { LoginComponent } from './login/login.component';
import { PayageComponent } from './payage/payage.component';
import { ProfileComponent } from './profile/profile.component';
import { SalesComponent } from './sales/sales.component';




const routes: Routes = [
  
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '',component: LoginComponent },
      { path: 'dashboard',component: DashboardComponent },
      { path: 'profile' , component: ProfileComponent},
      { path: 'inquirydata',component:InquirydataComponent},
      { path: 'sales', component:SalesComponent},
      { path: 'deliverylist', component:DeliverylistComponent},
      { path: 'invoicedata', component:InvoicedataComponent},
      { path: 'payage' , component:PayageComponent},
      { path: 'creditdebit',component:CreditdebitComponent},
      { path: 'debit',component:DebitComponent}
    ]
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }