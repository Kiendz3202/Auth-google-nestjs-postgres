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
      googleId: req.user.googleId,
    });

    if (userData) {
      const accessToken = await this.jwtService.signAsync({ ...userData });
      return {
        message: 'Login successfully',
        user: userData,
        accessToken: accessToken,
      };
    } else {
      user.email = req.user.email;
      user.googleId = req.user.googleId;
      user.firstName = req.user.firstName;
      user.lastName = req.user.lastName;
      user.image = req.user.picture;
      user.role = 'user';
      user.createAt = new Date();
      user.updateAt = new Date();
      const accessToken = await this.jwtService.signAsync({ ...user });

      const result = await this.usersRepository.save(user);
      return {
        message: 'User Info from Google',
        user: result,
        accessToken: accessToken,
      };
    }
  }
}
