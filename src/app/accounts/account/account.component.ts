import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { ActionListService } from '../../_services/action-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  id: any;
  account: Account;


  constructor(
    private actionListService: ActionListService,
    private accService: AccountsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

   this.route.params.subscribe(
     (params: Params) => {
       this.id = +params['id']
       this.account = this.accService.getAccount(this.id);
     }
   );

  }

  addToList() {
    this.actionListService.addListItem(this.account.name, this.account.email, this.account.status)
  }
}
