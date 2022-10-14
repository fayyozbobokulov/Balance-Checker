import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './types/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): IUser[] {
    return this.userService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.userService.findOne(name);
  }
}
