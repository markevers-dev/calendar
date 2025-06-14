import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: EntityRepository<User>,
    private em: EntityManager,
  ) {}

  async create(email: string, name?: string): Promise<User> {
    const user = this.userRepo.create({ email, name });
    await this.em.persistAndFlush(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ email });
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepo.findOne({ id });
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }
}
