import { SQSClient } from '@aws-sdk/client-sqs';
import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AppMessageHandler, QuerybusQueue } from './create-user.consumer';

@Module({
  imports: [
    SqsModule.register({
      consumers: [{ ...QuerybusQueue }],
      producers: [],
    }),
  ],
  controllers: [],
  providers: [AppMessageHandler],
})
export class SQSModule {}
