import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';

@Module({
  imports: [MessagesModule, ComputerModule],
})
export class AppModule {}
