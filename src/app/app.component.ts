import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Nawadarat';
  leadedFeature = 'accounts'

  navigate(feature: string) {
    // console.log(e)
    this.leadedFeature = feature;
  }
}
