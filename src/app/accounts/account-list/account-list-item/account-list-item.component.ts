import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../account/account.model';
import { AccountsService } from '../../accounts.service';

@Component({
  selector: 'app-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.scss']
})
export class AccountListItemComponent implements OnInit {

  @Input() account: Account;
  
  constructor(private accService: AccountsService) { }

  ngOnInit() {
  }

  
}
