import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './user/user.entity';
import { Event } from './event/event.entity';

const config: MikroOrmModuleOptions = {
  entities: [User, Event],
  dbName: process.env.POSTGRES_NAME || 'cryolendar-db',
  driver: PostgreSqlDriver,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +(process.env.POSTGRES_PORT || '5432'),
  user: process.env.POSTGRES_USER || 'cryolendar-admin',
  password: process.env.POSTGRES_PASSWORD || 'cryolendar-password',
  debug: process.env.NODE_ENV !== 'development' ? false : true,
  name: 'default',
};

export default config;
