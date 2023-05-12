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
import { CreateStaffDto } from './staff.dto';
import { plainToInstance } from 'class-transformer';

@Controller('staff')
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get('list-staffs')
  async getListStaff() {
    return await this.staffsService.findAll();
  }

  @Get(':id')
  async getDetailStaff(@Param('id') id: string): Promise<Staff | null> {
    return await this.staffsService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  async createStaff(@Body() staff: CreateStaffDto) {
    const staffDto = plainToInstance(CreateStaffDto, staff, {
      excludeExtraneousValues: true,
    });

    return await this.staffsService.createOne({ ...staffDto });
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async editStafff(@Param('id') id: string, @Body() body: any) {
    return await this.staffsService.editOne(id, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteStaffById(@Param('id') id: string) {
    this.staffsService.deleteUserById(id);
  }
}
