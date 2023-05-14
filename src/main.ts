import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChildProcessModule } from './child-process/child-process.module';
import { ChildProcessService } from './child-process/child-process.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const service = app.select(ChildProcessModule).get(ChildProcessService, { strict: true})

  service.getForkNestDataGeneratorModuleApp()

  await app.listen(3000);
}
bootstrap();
