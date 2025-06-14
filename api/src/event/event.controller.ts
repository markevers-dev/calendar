import { Controller, Post, Get, Body } from '@nestjs/common';
import { EventService } from './event.service';
import { UserService } from '../user/user.service';

@Controller('event')
export class EventsController {
  constructor(
    private readonly eventService: EventService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() body: any) {
    const user = await this.userService.findById(body.userId);
    if (!user) throw new Error('User not found');
    return this.eventService.create(user, body);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }
}
