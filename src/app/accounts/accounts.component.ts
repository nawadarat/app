import { Component, OnInit, Input } from '@angular/core';
import { Account } from './account/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  newAccount: Account[] = [
    new Account('asasass asas', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
    new Account('asas Shasasah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
    new Account('Atasasif asas', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
  ]

 selectedAccount: Account;
 
  constructor() { }

  ngOnInit() {
  }

}
