import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChildProcessModule } from './child-process/child-process.module';

@Module({
  imports: [ChildProcessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
