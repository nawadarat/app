import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MastersModule } from './masters/masters.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { ActionListComponent } from './action-list/action-list.component';
import { AccountListItemComponent } from './accounts/account-list/account-list-item/account-list-item.component';
import { ErrorHandler } from './_services/errorhandler.service';
import { ActionListService } from './_services/action-list.service';
import { NavbarComponent } from './masters/navbar/navbar.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { AccountManageComponent } from './accounts/account-manage/account-manage.component';


// Had to take this out because routerLink did not work
// it may have to do something with child routes or lazy loading

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    AccountsComponent,
    AccountComponent,
    ActionListComponent,
    AccountListComponent,
    AccountListItemComponent,
    DropdownDirective,
    AccountManageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MastersModule,
    AppRoutingModule
  ],
  providers: [ErrorHandler, ActionListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
