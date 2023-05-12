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

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list-users')
  async getListUser() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getDetailUser(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }
}
