import { Message, SQSClient } from '@aws-sdk/client-sqs';
import { Injectable } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';

@Injectable()
export class AppMessageHandler {
  constructor() {}
  @SqsMessageHandler(/** name: */ 'query_bus', /** batch: */ false)
  public async handleMessage(message: Message) {
    console.log('a new message arrivied', message);
  }

  @SqsConsumerEventHandler(
    /** name: */ 'queueName',
    /** eventName: */ 'processing_error',
  )
  public onProcessingError(error: Error, message: Message) {
    console.log('error', error);
    // report errors here
  }
}

const sqsClient = new SQSClient({ region: 'us-east-1' });

export const QuerybusQueue = {
  name: 'query_bus',
  queueUrl: `https://sqs.us-east-1.amazonaws.com/624638737469/query_bus`,
  sqs: sqsClient,
};
