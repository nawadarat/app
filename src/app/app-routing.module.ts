import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';

const routes: Routes = [
  { path: '', component: CustomersModule },
  // { path: 'customers', component: CustomersModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
