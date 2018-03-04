import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './masters/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'customers', component: CustomersModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
