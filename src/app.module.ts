import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DepositModule } from './deposit/deposit.module';

@Module({
  imports: [DatabaseModule, DepositModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
