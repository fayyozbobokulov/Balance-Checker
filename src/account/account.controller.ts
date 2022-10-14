import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get('/:name')
  findOne(@Param('name') name: string): number {
    return this.accountService.findByName(name);
  }
}
