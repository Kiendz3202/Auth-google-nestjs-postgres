import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { StaffsService } from './staff.service';
import { StaffsController } from './staffs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  providers: [StaffsService],
  controllers: [StaffsController],
  exports: [StaffsService],
})
export class UsersModule {}
