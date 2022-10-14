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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
