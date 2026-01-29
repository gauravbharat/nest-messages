import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Add validation for all incoming requests
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3333);
}
void bootstrap();
