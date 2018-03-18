import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MastersModule } from './masters/masters.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { HeaderComponent } from './masters/header/header.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { ActionListComponent } from './action-list/action-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    AccountComponent,
    ActionListComponent,
    AccountListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MastersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
