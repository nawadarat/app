import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [ AccountsService ]
})
export class AccountsComponent implements OnInit {

  selectedAccount: Account;

  constructor(private accService: AccountsService) { }

  ngOnInit() {
    this.accService.accountSelected
      .subscribe(
        (account: Account) => {
          this.selectedAccount = account; 
        });
  }

}
