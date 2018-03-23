import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActionList } from './action-list.model';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  actionList: ActionList[] = [
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", true),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", false),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", true),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", false),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", false),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),

  ]


  constructor() { }

  ngOnInit() {



  }

}
