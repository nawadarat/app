import { EventEmitter } from "@angular/core";

import { Account } from "./account/account.model";

export class AccountsService {
 
    accountSelected = new EventEmitter<Account>();

    // Property only accessible inside the component
    private  accounts: Account[] = [
      new Account('Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account('Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
      new Account('Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account('Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account('Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
      new Account('Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account('Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account('Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
      new Account('Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
    ]

      getAccounts() {
        return this.accounts.slice(); 
      }

}