import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersComponent, CustomerComponent]
})
export class CustomersModule { }
