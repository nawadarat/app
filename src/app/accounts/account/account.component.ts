import { Component, OnInit, Input } from '@angular/core';
import { Account } from './account.model';
import { ActionListService } from '../../_services/action-list.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: Account;


  constructor(private actionListService: ActionListService) { }

  ngOnInit() {
    // console.log(this.account)
  }

  addToList() {
   this.actionListService.addListItem(this.account.name, this.account.email, this.account.status)
  }
}
