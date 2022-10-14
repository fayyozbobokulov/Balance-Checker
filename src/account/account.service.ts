import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as MOCKED_ACCOUNTS from '../data/account.json';
import { IAccount } from './types/account.interface';
import { UserService } from '../user/user.service';
import { CurrencyEnum } from '../global/enum/currency.enum';

@Injectable()
export class AccountService {
  constructor(private readonly userService: UserService) {}

  findAll(): IAccount[] {
    return MOCKED_ACCOUNTS.accounts;
  }

  findByName(name: string): number {
    const user = this.userService.findOne(name);
    if (!user) throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    const user_accounts = this.findByUserId(MOCKED_ACCOUNTS.accounts, user.id);
    return this.getTotalBalance(user_accounts);
  }

  private findByUserId(accounts: IAccount[], user_id: number): IAccount[] {
    return accounts.filter((account: IAccount) => user_id === account.userId);
  }

  private getTotalBalance(accounts: IAccount[]): number {
    let sum = 0;
    accounts.map((account: IAccount) => {
      let balance = account.balance;
      if (account.currency === CurrencyEnum.EUR)
        balance = this.convertEURtoUSD(account.balance);
      sum += balance;
    });
    return sum;
  }

  private convertEURtoUSD(amount: number): number {
    return amount / 1.03;
  }
}
