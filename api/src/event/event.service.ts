import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { Event } from './event.entity';
import { User } from '../user/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepo: EntityRepository<Event>,
    private em: EntityManager,
  ) {}

  async create(user: User, data: Partial<Event>): Promise<Event> {
    const { title, startDate, endDate, allDay, description, location } = data;
    if (!title || !startDate || !endDate || allDay === undefined) {
      throw new Error('Missing required event fields');
    }
    const event = this.eventRepo.create({
      title,
      startDate,
      endDate,
      allDay,
      description,
      location,
      user,
    });
    await this.em.persistAndFlush(event);
    return event;
  }

  async findById(id: string): Promise<Event | null> {
    return this.eventRepo.findOne({ id }, { populate: ['user'] });
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepo.findAll({ populate: ['user'] });
  }
}
