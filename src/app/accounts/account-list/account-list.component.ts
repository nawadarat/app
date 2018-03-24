import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account/account.model';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  // Property only accessible inside the component
  accounts: Account[];

  @Output() accountWasSelected = new EventEmitter<Account>();


  constructor(private accService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accService.getAccounts();
  }

}
