import {
  Entity,
  PrimaryKey,
  Property,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Event } from '../event/event.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryKey()
  id: string = uuidv4();

  @Property()
  email: string;

  @Property({ nullable: true })
  name?: string;

  @OneToMany(() => Event, (event) => event.user)
  events = new Collection<Event>(this);
}
