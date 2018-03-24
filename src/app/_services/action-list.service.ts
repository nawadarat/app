import { Injectable } from '@angular/core';
import { ActionList } from '../action-list/action-list.model';
import { ErrorHandler } from './errorhandler.service';

@Injectable()
export class ActionListService {

  private actionList: ActionList[] = [
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", true),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", false),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", true),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", false),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),
    new ActionList("Zaheer Aziz", "zaheer.aziz@gmail.com", false),
    new ActionList("Atif Kamal", "atif.kamal@gmail.com", true),
  ]
  constructor(private errorHandler: ErrorHandler) { }

  getActionList(){
    return this.actionList.slice();
  }

  addListItem(name: string, email: string, status: boolean) {

    let newEmailee;

    // !name && !email ? console.log("No Name and email entered") : console.log(name + " " + email);
    if (name && email) {
      newEmailee = new ActionList(name, email, status)
      console.log(newEmailee)
      this.actionList.unshift(newEmailee) // .push add to the add. .unshift added at the beginning
      console.log(this.actionList)
      // ToDo: Clear the form when added successfully
      // ToDo: Add to the top of the array
    } else {
      this.errorHandler.logMessage("Please enter at least something")
    }
    return this.actionList.slice();
  }

}
