import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Event } from './event.entity';
import { EventService } from './event.service';
import { EventsController } from './event.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [MikroOrmModule.forFeature([Event]), UserModule],
  providers: [EventService],
  exports: [EventService],
  controllers: [EventsController],
})
export class EventModule {}
