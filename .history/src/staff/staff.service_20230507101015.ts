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

  findOne(id: string): Promise<Staff | null> {
    return this.staffsRepository.findOneBy({ id });
  }

  async createOne(data: Staff) {
    const staff = new Staff();

    const staffData = await this.staffsRepository.findOneBy({ id: data?.id });

    if (staffData) {
      return {
        message: 'Login successfully',
        data: staffData,
      };
    } else {
      staff.email = data.email;
      staff.firstName = data.firstName;
      staff.lastName = data.lastName;
      staff.image = data.image;
      staff.role = data.role;

      const result = await this.staffsRepository.save(staff);
      return {
        message: 'User Info from Google',
        data: result,
      };
    }
  }

  editOne(data: any): Promise<Staff> {
    console.log(data);
    // return this.staffsRepository.save
  }

  deleteUserById(id: string) {
    this.staffsRepository.delete(id);
  }
}
