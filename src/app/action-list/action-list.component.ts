import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActionList } from './action-list.model';
import { ActionListService } from '../_services/action-list.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss'],
  providers: [  ]
})
export class ActionListComponent implements OnInit {

  allowAdd = false;

  actionList: ActionList[];

  @ViewChild('nameInput') nameEL: ElementRef;
  @ViewChild('emailInput') emailEl: ElementRef;
  @ViewChild('statusInput') statusEl: ElementRef;


  constructor(
    private actionListService: ActionListService
  ) { }

  ngOnInit() {
    this.actionList = this.actionListService.getActionList();
  }

  // ToDo - Add Validation on blur
  // validate(e) {
  //   console.log(e.target)
  // }

  addListItem() {
    const name: string = this.nameEL.nativeElement.value;
    const email: string = this.emailEl.nativeElement.value;
    const status: boolean = this.statusEl.nativeElement.checked;

    this.actionList = this.actionListService.addListItem(name, email, status);
  }

}
