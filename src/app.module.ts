import { Module } from '@nestjs/common';
import { UserService } from './users/service/user.service';
import { UserController } from './users/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
