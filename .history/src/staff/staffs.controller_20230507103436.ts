import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from 'src/middlewares/authorization/authGuard.middleware';
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
  @UseGuards(AuthGuard)
  async createStaff(@Body() staff: any) {
    console.log(staff);
    return await this.staffsService.createOne(staff);
  }

  @Patch('staff/:id')
  async editStafff(@Param('id') id: string, @Body() body: any) {
    return await this.staffsService.editOne(id, body);
  }

  @Delete('/staff/:id')
  async deleteStaffById(@Param('id') id: string) {
    this.staffsService.deleteUserById(id);
  }
}
