import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsEmail,
  Length,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { StaffRole } from 'src/config/enum/staff-role.enum';

export class CreateStaffDto {
  @IsOptional()
  @Expose()
  @IsEmail()
  email: string;

  @IsOptional()
  @Expose()
  @IsNotEmpty()
  @Length(2, 10)
  firstName: string;

  @IsOptional()
  @Expose()
  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

  @IsOptional()
  @Expose()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @Expose()
  @IsEnum(StaffRole)
  role: StaffRole;
}
