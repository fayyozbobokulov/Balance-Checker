import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [UserModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
