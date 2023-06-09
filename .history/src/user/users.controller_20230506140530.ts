import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UsersController {
  constructor(private readonly appService: AppService) {}
}
