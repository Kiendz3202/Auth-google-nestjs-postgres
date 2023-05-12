import {
  Controller,
  Get,
  UseGuards,
  Req,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StaffsService } from './staff.service';
import { Staff } from './staff.entity';

@Controller()
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get('staffs')
  async getListUser() {
    return await this.staffsService.findAll();
  }

  @Post('staff/:id')
  async editStafff() {}

  @Delete('/staff/:id')
  async deleteUserById(@Param('id') id: string) {
    this.staffsService.deleteUserById(id);
  }
}
