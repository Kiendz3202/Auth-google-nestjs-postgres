import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './auth/googleAuth/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { Staff } from './staff/staff.entity';
import { StaffsModule } from './staff/staffs.module';
import { FirebaseService } from './firebase/firebase.service';
import { PreAuthMiddleware } from './common/middlewares/authorization/firebase.middleware';

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
  providers: [AppService, GoogleStrategy, FirebaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PreAuthMiddleware).forRoutes({
      path: '/secure/*',
      method: RequestMethod.ALL,
    });
  }
}