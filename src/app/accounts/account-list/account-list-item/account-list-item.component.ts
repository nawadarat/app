import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Account } from '../../account/account.model';

@Component({
  selector: 'app-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.scss']
})
export class AccountListItemComponent implements OnInit {

  @Input() account = Account;
  @Output() accountSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.accountSelected.emit();
  }

}
