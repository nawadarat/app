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
import { AccountListItemComponent } from './accounts/account-list/account-list-item/account-list-item.component';
import { ErrorHandler } from './_services/errorhandler.service';
import { ActionListService } from './_services/action-list.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    AccountComponent,
    ActionListComponent,
    AccountListComponent,
    AccountListItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    MastersModule
  ],
  providers: [ErrorHandler, ActionListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
