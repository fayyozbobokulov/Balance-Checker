import { Injectable } from '@nestjs/common';

import * as MOCKED_USERS from '../data/users.json';
import { IUser } from './types/user.interface';

@Injectable()
export class UserService {
  findAll(): IUser[] {
    return MOCKED_USERS.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
