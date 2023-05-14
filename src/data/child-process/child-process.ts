import { NestFactory } from '@nestjs/core';
import { AppMessageHandler } from './consumers/create-user.consumer';
import { SQSModule } from './consumers/sqs.module';

let service = null
async function bootstrap() {
  const app = await NestFactory.create(SQSModule);
  service = app.select(SQSModule).get(AppMessageHandler, { strict: true });
}
bootstrap();
