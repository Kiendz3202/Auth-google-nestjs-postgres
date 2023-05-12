import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAndUpsertUser(data: User): Promise<User> {
    let user = await this.findOneBy({ id: data.id });

    if (user) {
      user = Object.assign(user, data);
    } else {
      user = this.create(data);
    }

    return this.save(user);
  }
}
