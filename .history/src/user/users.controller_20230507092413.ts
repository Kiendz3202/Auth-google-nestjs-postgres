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
  async getListUser() {
    return await this.usersService.findAll();
  }

  @Get('user/:id')
  async getDetailUser(@Param() id: string) {
    return await this.usersService.findOne(id);
  }
}
