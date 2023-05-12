import { Injectable } from '@nestjs/common';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    const user = new User();
    user.firstName = req.user.firstName;
    user.lastName = req.user.lastName;
    user.image = req.user.picture;
    user.role = 'user';

    const result = await this.usersRepository.save(user);
    return {
      message: 'User Info from Google',
      user: result,
    };
  }
  hello() {
    return 'Hello';
  }
}
