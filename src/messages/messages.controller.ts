import { Controller, Get, Post, Headers, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(@Headers() header: any) {
    console.log('Header', header);
  }

  // Applied validation class to the request handler
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('Body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }
}
