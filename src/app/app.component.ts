import { Component, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() title = 'Nawadarat';
  

  constructor() { }

  ngOnInit() {

  }

}
