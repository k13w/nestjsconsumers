import { NestFactory } from '@nestjs/core';
import { AppMessageHandler } from './consumers/create-user.consumer';
import { SQSModule } from './consumers/sqs.module';

async function bootstrap() {
  const app = await NestFactory.create(SQSModule);
  app.select(SQSModule).get(AppMessageHandler, { strict: true });

  await app.init();
}
bootstrap();
