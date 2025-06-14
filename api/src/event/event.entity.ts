import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { User } from '../user/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Event {
  @PrimaryKey()
  id: string = uuidv4();

  @Property()
  title: string;

  @Property({ nullable: true })
  description?: string;

  @Property()
  startDate: Date;

  @Property()
  endDate: Date;

  @Property({ default: false })
  allDay: boolean;

  @Property({ nullable: true })
  location?: string;

  @ManyToOne(() => User)
  user: User;
}
