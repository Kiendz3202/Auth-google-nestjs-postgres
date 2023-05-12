import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsEmail, Length, IsEnum } from 'class-validator';
import { StaffRole } from 'src/config/enum/staff-role.enum';
import { plainToInstance } from 'class-transformer';

export class CreateStaffDto {
  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsNotEmpty()
  @Length(2, 10)
  firstName: string;

  @Expose()
  @IsNotEmpty()
  @Length(2, 20)
  lastName: string;

  @Expose()
  @IsNotEmpty()
  @Transform(({ obj }) => obj.lastName + ' ' + obj.firstName)
  fullName: string;

  @Expose()
  @IsNotEmpty()
  image: string;

  @Expose()
  @IsEnum(StaffRole)
  role: StaffRole;

  static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
