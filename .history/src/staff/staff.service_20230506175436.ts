import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff)
    private staffsRepository: Repository<Staff>,
  ) {}

  findAll(): Promise<Staff[]> {
    return this.staffsRepository.find();
  }

  findOne(id: number): Promise<Staff | null> {
    return this.staffsRepository.findOneBy({ id });
  }

  //   updateOne(id: string, data: ): Promise<Staff> {
  //     return this.staffsRepository.save
  //   }

  deleteUserById(id: string): Promise<void> {
    this.staffsRepository.delete(id);
  }
}
