import { Module } from '@nestjs/common';
import { ChildProcessModule } from './child-process/child-process.module';

@Module({
  imports: [ChildProcessModule]
})
export class AppModule {}
