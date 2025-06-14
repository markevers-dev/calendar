import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';

import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [MikroOrmModule.forRoot(mikroOrmConfig), UserModule, EventModule],
})
export class AppModule {}
