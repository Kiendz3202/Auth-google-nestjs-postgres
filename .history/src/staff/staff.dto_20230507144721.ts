import { IsNotEmpty, IsNumber, IsEmail, Length, IsEnum } from 'class-validator';
import { StaffRole } from 'src/config/enum/staff-role.enum';

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

  @IsEnum(StaffRole)
  role: StaffRole;
}
