import { Component, OnInit } from '@angular/core';
import { Account } from '../account/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [
    new Account('Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
    new Account('Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
    new Account('Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
    
  ]

  constructor() { }

  ngOnInit() {
    //console.log(this.account[0].name)
  }

}
