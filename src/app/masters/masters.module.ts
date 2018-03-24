import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownDirective } from '../_directives/dropdown.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class MastersModule { }
