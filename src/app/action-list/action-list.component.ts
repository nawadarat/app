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

  @ViewChild('nameInput') nameEL: ElementRef;
  @ViewChild('emailInput') emailEl: ElementRef;
  @ViewChild('statusInput') statusEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addListItem() {
    const name: string = this.nameEL.nativeElement.value;
    const email: string = this.emailEl.nativeElement.value;
    const status: boolean = this.statusEl.nativeElement.checked;

    let newEmailee;

    // !name && !email ? console.log("No Name and email entered") : console.log(name + " " + email);
    if(name && email) {
      newEmailee = new ActionList(name, email, status)
      console.log(newEmailee)
      this.actionList.unshift(newEmailee) // .push add to the add. .unshift added at the beginning
      // ToDo: Clear the form when added successfully
      // ToDo: Add to the top of the array
    } else {
      console.log("No Name and email entered")
    }    
    
  }

}
