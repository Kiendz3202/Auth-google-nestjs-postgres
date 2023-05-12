import { Expose } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: string;

  @Expose()
  createAt: Date;

  @Expose()
  updateAt: Date;
}
