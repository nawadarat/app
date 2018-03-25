import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DropdownDirective } from '../_directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';

// Had to take this out because routerLink did not work
// it may have to do something with child routes or lazy loading
// ...also the directive now needs to be declared in appModule, as navbar is now declared there and dropdown doesn't work.

@NgModule({
  declarations: [
    HeaderComponent,
    // NavbarComponent,
    HomeComponent,
    // DropdownDirective
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    // NavbarComponent
  ]
})
export class MastersModule { }
