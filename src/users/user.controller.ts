import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IUserEntity } from './entities/user.entity';
import { PartialUserDto } from './service/dto/partialUser.dto';
import { UserDto } from './service/dto/user.dto';
import { UserService } from './service/user.service';

@Controller()
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    return await this.service.getAllUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<IUserEntity> {
    try {
      return await this.service.getUserById(userId);
    } catch (err) {
      console.log(err);
    }
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

  @Patch()
  async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') userId: string): Promise<string> {
    try {
      const deletedUser = await this.service.deleteUserById(userId);
      if (deletedUser) {
        return 'Usuário deletado com sucesso';
      } else {
        return 'Usuário não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
