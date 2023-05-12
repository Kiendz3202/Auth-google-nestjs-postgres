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

@Controller()
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get('users')
  async getListUser() {
    return await this.staffsService.findAll();
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    return this.staffsService.deleteUserById(id);
  }
}
