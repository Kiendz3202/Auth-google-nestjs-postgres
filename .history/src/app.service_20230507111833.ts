import { Injectable, Scope } from '@nestjs/common';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable({ scope: Scope.TRANSIENT })
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    const user = new User();

    const userData = await this.usersRepository.findOneBy({
      email: req.user.email,
    });
    console.log(userData);

    if (userData) {
      return {
        message: 'Login successfully',
        user: userData,
      };
    } else {
      user.email = req.user.email;
      user.googleId = req.user.googleId;
      user.firstName = req.user.firstName;
      user.lastName = req.user.lastName;
      user.image = req.user.picture;
      user.role = 'user';
      // const accessToken = await this.jwtService.signAsync(user);
      // console.log(accessToken);

      console.log('hello');

      const result = await this.usersRepository.save(user);
      return {
        message: 'User Info from Google',
        user: result,
      };
    }
  }
}
