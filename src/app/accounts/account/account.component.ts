import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { ActionListService } from '../../_services/action-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  id: number;
  account: Account;


  constructor(
    private actionListService: ActionListService,
    private accService: AccountsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

   this.route.params.subscribe(
     (params: Params) => {
       this.id = +params['id']
       this.account = this.accService.getAccount(this.id);
     },
     (error: any) => {
       console.log(error)
     }
   );

  }

  addToList() {
    this.actionListService.addListItem(this.account.name, this.account.email, this.account.status)
  }

  edit() {
    this.router.navigate(['manage'], {queryParams: {token: 'Aasaswqeqwdas344t*&$&*(SIFAUFSU2TO8G786o2efluscldp9695256', user:'username' }, fragment: 'fragment', relativeTo: this.route })
  }
}
