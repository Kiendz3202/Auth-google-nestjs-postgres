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

@Controller()
export class StaffsController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  async getListUser() {
    return await this.usersService.findAll();
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUserById(id);
  }
}
