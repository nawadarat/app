import { EventEmitter } from "@angular/core";

import { Account } from "./account/account.model";

export class AccountsService {
 
    accountSelected = new EventEmitter<Account>();

    // Property only accessible inside the component
    private  accounts: Account[] = [
      new Account(0, 'Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account(1, 'Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
      new Account(2, 'Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account(3, 'Waleed Haq', 'waleed.haq@gmail.com', '+92321212121', new Date(2018, 3, 1), true),
      new Account(4, 'Maqbool Shah', 'maqbool.shah@gmail.com', '+92321212121', new Date(2018, 3, 2), false),
      new Account(5, 'Atif Kamal', 'atif.kamal@gmail.com', '+92321212121', new Date(2018, 3, 1), true)
    ]

      getAccounts() {
        return this.accounts.slice(); 
      }

      getAccount(index: number) {
        return this.accounts[index]
      }

}