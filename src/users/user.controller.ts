import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { IUserEntity } from './entities/user.entity';
import { UserService } from './service/user.service';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }
}
