import { Injectable } from '@nestjs/common';

import * as MOCKED_USERS from '../data/users.json';
import { IUser } from './types/user.interface';

@Injectable()
export class UserService {
  findAll(): IUser[] {
    return MOCKED_USERS.users;
  }

  findOne(name: string): IUser {
    const user = MOCKED_USERS.users.find((user: IUser) =>
      this.compareTwoString(name, user.name),
    );
    return user;
  }

  private compareTwoString(string1: string, string2: string): boolean {
    return string1.toUpperCase() === string2.toUpperCase();
  }
}
