import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './masters/home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ActionListComponent } from './action-list/action-list.component';
import { AccountManageComponent } from './accounts/account-manage/account-manage.component';
import { AccountComponent } from './accounts/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: '', redirectTo: '/accounts', pathMatch: "full" },
  { path: 'accounts', component: AccountsComponent, children: [
    { path: '', component: AccountManageComponent }, 
    { path: ':id', component: AccountComponent }
  ] },
  { path: 'todo', component: ActionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
