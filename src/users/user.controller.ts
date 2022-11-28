import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUserEntity } from './entities/user.entity';
import { UserDto } from './service/dto/user.dto';
import { UserService } from './service/user.service';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }

  @Post()
  async createUser(
    @Body() { name, email, password, cpf, role }: UserDto,
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        name,
        email,
        password,
        cpf,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
