import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './masters/home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ActionListComponent } from './action-list/action-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: '', redirectTo: '/accounts', pathMatch: "full" },
  { path: 'accounts', component: AccountsComponent, children: [
    {path: 'accounts:id' }
  ] },
  { path: 'todo', component: ActionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
