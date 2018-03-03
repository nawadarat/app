import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NserviceComponent } from './nservice/nservice.component';
import { NservicesComponent } from './nservices/nservices.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NserviceComponent, NservicesComponent]
})
export class NservicesModule { }
