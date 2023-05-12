import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './auth/googleAuth/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { Staff } from './staff/staff.entity';
import { StaffsModule } from './staff/staffs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'manhkien322002',
      database: 'sonat project',
      entities: [User, Staff],
      synchronize: true, // comment when deploy to product because you can lose your data
    }),
    UsersModule,
    StaffsModule,
    TypeOrmModule.forFeature([User, Staff]),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
