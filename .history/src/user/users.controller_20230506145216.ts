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
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  async findAll() {
    return await this.usersService.findAll();
  }

  @Delete('/user/:id')
  async deleteUserById(@Param('id') id: any): Promise<void> {
    return this.usersService.deleteUserById(id);
  }
}
