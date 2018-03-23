import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../account/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  // Property only accessible inside the component
  accounts: Account[] = [
    new Account('Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
    new Account('Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
    new Account('Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),

  ]

  @Output() accountWasSelected = new EventEmitter<Account>();

  // Property inputted by the parent component
  // @Input() accounts: Account[]

  constructor() { }

  ngOnInit() {
    //console.log(this.account[0].name)
  }

  // sendAccountInfo(e:Event) {
  //   console.log(e.srcElement.innerHTML)
  //   // emit my event named onAccountClick
  // }

  afterAccountSelected(account: Account) {
    this.accountWasSelected.emit(account)
  }
}
