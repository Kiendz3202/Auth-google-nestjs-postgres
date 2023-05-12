import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StaffsService } from './staff.service';
import { Staff } from './staff.entity';

@Controller()
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get('staffs')
  async getListStaff() {
    return await this.staffsService.findAll();
  }

  @Get('staff/:id')
  async getDetailStaff(@Param('id') id: string): Promise<Staff | null> {
    return await this.staffsService.findOne(id);
  }

  @Post('staff')
  async createStaff(@Body() staff: any) {
    console.log(staff);
    return await this.staffsService.createOne(staff);
  }

  @Post('staff/:id')
  async editStafff() {}

  @Delete('/staff/:id')
  async deleteStaffById(@Param('id') id: string) {
    this.staffsService.deleteUserById(id);
  }
}
