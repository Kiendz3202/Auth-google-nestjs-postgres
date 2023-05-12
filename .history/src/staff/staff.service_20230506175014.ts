import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff)
    private usersRepository: Repository<Staff>,
  ) {}

  findAll(): Promise<Staff[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Staff | null> {
    return this.usersRepository.findOneBy({ id });
  }

  deleteUserById(id: string): Promise<void> {
    this.usersRepository.delete(id);
  }
}
