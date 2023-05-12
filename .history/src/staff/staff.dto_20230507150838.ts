import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsEmail, Length, IsEnum } from 'class-validator';
import { StaffRole } from 'src/config/enum/staff-role.enum';

export class CreateStaffDto {
  //   @Expose()
  @IsEmail()
  email: string;

  //   @Expose()
  @IsNotEmpty()
  @Length(2, 10)
  firstName: string;

  //   @Expose()
  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

  //   @Expose()
  @IsNotEmpty()
  image: string;

  //   @Expose()
  @IsEnum(StaffRole)
  role: StaffRole;
}
