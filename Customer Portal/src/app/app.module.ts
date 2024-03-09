import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PayageComponent } from './payage/payage.component';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { DeliverylistComponent } from './deliverylist/deliverylist.component';
import { CreditdebitComponent } from './creditdebit/creditdebit.component';
import { InvoicedataComponent } from './invoicedata/invoicedata.component';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { ProfileComponent } from './profile/profile.component';
import { DebitComponent } from './debit/debit.component';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,

    HeaderComponent,
    SidenavComponent,
    PayageComponent,
    SalesorderComponent,
    DeliverylistComponent,
    CreditdebitComponent,
    InvoicedataComponent,
    InquirydataComponent,
    ProfileComponent,
    DebitComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
