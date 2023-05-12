import { IsNotEmpty, IsNumber, IsEmail, Length, IsEnum } from 'class-validator';
import { UserRole } from 'src/config/enum/user-role.enum';

export class CreateStaffDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(2, 10)
  firstName: string;

  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

  @IsNotEmpty()
  image: string;

  @IsEnum(UserRole)
  role: UserRole;
}
