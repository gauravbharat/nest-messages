import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  // Providers: things that can be used as dependencies for other classes
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
