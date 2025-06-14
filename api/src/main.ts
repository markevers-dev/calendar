import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as fastifyCookie from '@fastify/cookie';
import * as fastifySession from '@fastify/session';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(fastifyCookie);
  await app.register(fastifySession, {
    secret: process.env.FASTIFY_SESSION_SECRET || 'default_secret',
    cookie: {
      secure: false,
    },
    saveUninitialized: false,
  });

  await app.listen(5001, process.env.BASE_URL || '0.0.0.0');
}
void bootstrap();
