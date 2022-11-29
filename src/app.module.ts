import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserService } from './users/service/user.service';
import { UserController } from './users/user.controller';
import { UserRepository } from './users/userRepository';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
