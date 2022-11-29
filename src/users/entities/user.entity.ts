import { UserDto } from "../service/dto/user.dto";

export interface IUserEntity extends UserDto{
  id: string;
}
