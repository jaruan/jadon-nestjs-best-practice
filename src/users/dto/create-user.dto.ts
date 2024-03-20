import { Length } from 'class-validator';

export class CreateUserDto {
  @Length(0, 255)
  firstName: string;
  @Length(0, 255)
  lastName: string;
}
