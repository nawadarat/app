import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Nawadarat';
  leadedFeature = 'accounts'


  constructor() { }

  navigate(feature: string) {
    // console.log(e)
    this.leadedFeature = feature;
  }

  ngOnInit() {

  }

}
